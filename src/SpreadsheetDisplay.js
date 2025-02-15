// Reactと必要なフックをインポート
import React, { useState, useEffect } from 'react';

// SpreadsheetDisplayコンポーネントを定義
const SpreadsheetDisplay = () => {
    // データ、ローディング状態、エラー状態を管理するステート変数を初期化
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // コンポーネントがマウントされた時に実行される副作用
    useEffect(() => {
        // GoogleスプレッドシートのID
        const SHEET_ID = '18idCuyfTZYeHhWg5pjjGPk3KVuxO8LYsaiy35VInQXY';
        // 使用するシート名
        const SHEET_NAME = 'Sheet1';

        // スプレッドシートのデータをCSV形式で取得するためのURL
        const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${SHEET_NAME}`;

        // URLからデータをフェッチ
        fetch(url)
            // レスポンスをテキストとして取得
            .then(response => response.text())
            // CSVデータを処理
            .then(csvData => {
                // CSVの各行を配列に分割し、引用符を削除
                const rows = csvData.split('\n').map(row =>
                    row.split(',').map(cell => cell.replace(/^"|"$/g, ''))
                );

                // 1行目（ヘッダー行）を取得
                const headers = rows[0];

                // 各必要なカラムのインデックスを検索
                const questionIndex = headers.findIndex(header =>
                    header.includes('質問'));
                const answerIndex = headers.findIndex(header =>
                    header.includes('自治会の回答'));
                const publicPermissionIndex = headers.findIndex(header =>
                    header.includes('質問の内容と回答を公開'));

                // データをフィルタリングして整形
                const filteredData = rows.slice(1)  // ヘッダー行を除外
                    // 公開許可が「はい」のデータのみフィルタリング
                    .filter(row => {
                        const permission = row[publicPermissionIndex]?.toLowerCase();
                        return permission === 'はい';
                    })
                    // 必要なデータ（質問と回答）のみを抽出
                    .map(row => ({
                        question: row[questionIndex],
                        answer: row[answerIndex]
                    }));

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

    // ローディング中の表示
    if (loading) {
        return (
            <div className="flex justify-center items-center p-8">
                <p className="text-gray-600">読み込み中...</p>
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

    // メインのレンダリング
    return (
        <div className="max-w-4xl mx-auto p-4 space-y-6">
            {/* タイトル */}
            <h1 className="text-2xl font-bold text-center mb-8">質問と回答</h1>
            {/* 質問と回答のリストをマップして表示 */}
            {data.map((item, index) => (
                <div key={index} className="w-full bg-white rounded-lg border border-gray-200 shadow-sm">
                    <div className="p-6">
                        {/* 質問 */}
                        <h2 className="text-lg font-semibold mb-4">
                            Q. {item.question}
                        </h2>
                        {/* 回答 */}
                        <div className="pt-2">
                            <p className="text-gray-700">A.{item.answer}</p>
                        </div>
                    </div>
                </div>
            ))}
            {/* データが空の場合のメッセージ */}
            {data.length === 0 && (
                <p className="text-center text-gray-600">
                    現在公開可能な質問はありません。
                </p>
            )}
        </div>
    );
};

// コンポーネントをエクスポート
export default SpreadsheetDisplay;