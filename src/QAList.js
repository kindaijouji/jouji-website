import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';

const QAList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('すべて');
    const [openQuestionId, setOpenQuestionId] = useState(null);

    // カテゴリーリスト
    const categoriesList = ['すべて', '自治会について', 'イベント', '学校生活', 'その他'];

    // スプレッドシートからデータを取得
    useEffect(() => {
        // GoogleスプレッドシートのID
        const SHEET_ID = '18idCuyfTZYeHhWg5pjjGPk3KVuxO8LYsaiy35VInQXY';
        // 使用するシート名
        const SHEET_NAME = 'Sheet1';

        // スプレッドシートのデータをCSV形式で取得するためのURL
        const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${SHEET_NAME}`;

        // URLからデータをフェッチ
        fetch(url)
            .then(response => response.text())
            .then(csvData => {
                // CSVの各行を配列に分割し、引用符を削除
                const rows = csvData.split('\n').map(row =>
                    row.split(',').map(cell => cell.replace(/^"|"$/g, ''))
                );

                // 1行目（ヘッダー行）を取得
                const headers = rows[0];

                // 各必要なカラムのインデックスを検索
                const questionIndex = headers.findIndex(header =>
                    header.includes('質問内容'));
                const answerIndex = headers.findIndex(header =>
                    header.includes('自治会の回答'));
                const publicPermissionIndex = headers.findIndex(header =>
                    header.includes('公開'));
                const categoryIndex = headers.findIndex(header =>
                    header.includes('カテゴリー'));

                // データをフィルタリングして整形
                const filteredData = rows.slice(1)  // ヘッダー行を除外
                    // 公開許可が「はい」のデータのみフィルタリング
                    .filter(row => {
                        const permission = row[publicPermissionIndex]?.toLowerCase();
                        return permission === 'はい';
                    })
                    // 必要なデータのみを抽出
                    .map((row, index) => {
                        // カテゴリーの値を取得
                        let category = '自治会について'; // デフォルト値

                        // カテゴリーの値がある場合は取得
                        if (row[categoryIndex]) {
                            const categoryValue = parseInt(row[categoryIndex], 10);
                            // カテゴリーの値に応じて文字列を設定
                            switch (categoryValue) {
                                case 1:
                                    category = '自治会について';
                                    break;
                                case 2:
                                    category = 'イベント';
                                    break;
                                case 3:
                                    category = '学校生活';
                                    break;
                                case 4:
                                    category = 'その他';
                                    break;
                                default:
                                    category = '自治会について';
                            }
                        }

                        return {
                            id: index,
                            question: row[questionIndex],
                            answer: row[answerIndex],
                            category: category
                        };
                    });

                // フィルタリングしたデータをステートに設定
                setData(filteredData);
                // ローディング状態を解除
                setLoading(false);
            })
            // エラーハンドリング
            .catch(error => {
                console.error('Error:', error);
                setError('データの取得に失敗しました');
                setLoading(false);
            });
    }, []); // 空の依存配列で初回マウント時のみ実行

    // 検索とカテゴリーでフィルター
    const filteredQA = data.filter(qa =>
        (selectedCategory === 'すべて' || qa.category === selectedCategory) &&
        (qa.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            qa.answer?.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    // ローディング中の表示
    if (loading) {
        return (
            <div className="flex justify-center items-center p-8">
                <p className="text-gray-600">質問データを読み込み中...</p>
            </div>
        );
    }

    // エラー時の表示
    if (error) {
        return (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-600">{error}</p>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-6">よくある質問</h2>

            {/* 検索・フィルター */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                    <input
                        type="text"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="質問を検索(一致している文言がある質問を表示します)"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
                </div>
                <select
                    className="md:w-48 p-2 border border-gray-300 rounded-lg"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    {categoriesList.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            {/* スクロール可能なQ&Aリストのコンテナ */}
            <div className="h-96 overflow-y-auto pr-2">
                <div className="space-y-4">
                    {filteredQA.length > 0 ? (
                        filteredQA.map((qa) => (
                            <div
                                key={qa.id}
                                className="border rounded-lg hover:border-black transition-colors"
                            >
                                <button
                                    className="w-full text-left p-4 flex items-start justify-between"
                                    onClick={() => setOpenQuestionId(openQuestionId === qa.id ? null : qa.id)}
                                >
                                    <div className="flex items-start">
                                        <HelpCircle size={24} className="mr-3 flex-shrink-0 mt-1" />
                                        <div>
                                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                {qa.category}
                                            </span>
                                            <h3 className="font-medium mt-2">{qa.question}</h3>
                                        </div>
                                    </div>
                                    <ChevronDown
                                        size={20}
                                        className={`flex-shrink-0 transform transition-transform ${openQuestionId === qa.id ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {openQuestionId === qa.id && (
                                    <div className="px-11 pb-4">
                                        <p className="text-gray-600">{qa.answer || '回答準備中です'}</p>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-center p-4 border rounded-lg">
                            <p className="text-gray-500">該当する質問が見つかりませんでした。</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QAList;