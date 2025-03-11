// QAList.js - 質問と回答のリストを表示するコンポーネント
import React, { useState, useEffect } from 'react'; // React本体とフックをインポート
import { Search, ChevronDown, HelpCircle } from 'lucide-react'; // アイコンコンポーネントをインポート

const QAList = () => {
    // ========== 状態管理（State）の定義 ==========
    // データ関連の状態
    const [data, setData] = useState([]); // 質問と回答のデータを格納する配列
    const [loading, setLoading] = useState(true); // データ読み込み中かどうかを示すフラグ
    const [error, setError] = useState(null); // エラー情報を格納する変数

    // UI関連の状態
    const [searchTerm, setSearchTerm] = useState(''); // 検索ボックスの入力値
    const [selectedCategory, setSelectedCategory] = useState('すべて'); // 選択されたカテゴリー
    const [openQuestionId, setOpenQuestionId] = useState(null); // 現在開いている質問のID

    // カテゴリーの選択肢を定義 - 検索フィルターで使用
    const categoriesList = ['すべて', '自治会について', 'イベント', '学校生活', 'その他'];

    // ========== ユーティリティ関数 ==========
    // テキスト内のURLを検出して画像またはリンク表示に変換する関数
    const formatAnswerWithImages = (text) => {
        if (!text) return '回答準備中です';

        // Googleドライブの画像URLかどうかを判定
        const isGoogleDriveUrl = (url) => {
            return url.includes('drive.google.com/file/d/') && url.includes('view');
        };

        // テキスト内のURLを検出するための正規表現
        const urlRegex = /(https?:\/\/[^\s]+)/g;

        // URLを検出して処理
        const parts = [];
        let lastIndex = 0;
        let match;

        // 正規表現でURLを探して分割
        while ((match = urlRegex.exec(text)) !== null) {
            // URL前のテキスト部分を追加
            if (match.index > lastIndex) {
                parts.push({
                    type: 'text',
                    content: text.substring(lastIndex, match.index)
                });
            }

            // URL部分を追加
            parts.push({
                type: 'url',
                content: match[0]
            });

            lastIndex = match.index + match[0].length;
        }

        // 残りのテキスト部分を追加
        if (lastIndex < text.length) {
            parts.push({
                type: 'text',
                content: text.substring(lastIndex)
            });
        }

        // 各部分をレンダリング
        return (
            <>
                {parts.map((part, index) => {
                    if (part.type === 'text') {
                        return <span key={index}>{part.content}</span>;
                    } else if (part.type === 'url') {
                        const url = part.content;

                        // Googleドライブの場合、埋め込みプレビューを表示
                        if (isGoogleDriveUrl(url)) {
                            // Google Driveのプレビュー埋め込みiframe用のURLを作成
                            return (
                                <div key={index} className="my-4">
                                    <div className="border rounded-lg overflow-hidden shadow-md">
                                        <iframe
                                            src={url.replace('/view', '/preview')}
                                            title="Google Drive Preview"
                                            width="100%"
                                            height="480"
                                            frameBorder="0"
                                            scrolling="no"
                                            className="w-full"
                                            allow="autoplay"
                                        ></iframe>
                                    </div>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline text-sm block mt-1"
                                    >
                                        元のリンクを開く
                                    </a>
                                </div>
                            );
                        }

                        // その他のURLはリンクとして表示
                        return (
                            <a
                                key={index}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline break-words"
                            >
                                {url}
                            </a>
                        );
                    }
                    return null;
                })}
            </>
        );
    };

    // ========== データ取得処理 ==========
    // コンポーネントが最初にマウントされたときに一度だけ実行される副作用
    useEffect(() => {
        const url = process.env.REACT_APP_URL;

        // fetchAPIを使ってURLからデータを非同期で取得
        fetch(url)
            .then(response => response.text()) // レスポンスをテキスト（CSV）として取得
            .then(csvData => {
                // CSVデータを加工してJavaScriptで扱いやすい形式に変換

                // CSVの各行を配列に分割し、各セルの引用符を削除
                // 1. csvData.split('\n') - 改行で分割して行の配列を作成
                // 2. .map(...) - 各行をさらに処理
                //    - row.split(',') - カンマで分割してセルの配列を作成
                //    - .map(cell => ...) - 各セルから引用符を削除
                const rows = csvData.split('\n').map(row =>
                    row.split(',').map(cell => cell.replace(/^"|"$/g, ''))
                );
                //console.log(rows); // データの確認（開発中のデバッグ用）
                // 1行目（ヘッダー行）を取得 - カラム名が含まれている
                const headers = rows[0];

                // 必要なカラムのインデックス（位置）を特定
                // findIndex()は配列内で条件を満たす最初の要素のインデックスを返す
                const questionIndex = headers.findIndex(header =>
                    header.includes('質問内容')); // 質問が含まれるカラムを探す
                const answerIndex = headers.findIndex(header =>
                    header.includes('自治会の回答')); // 回答が含まれるカラムを探す
                const publicPermissionIndex = headers.findIndex(header =>
                    header.includes('情報学部自治会の公式サイトに質問の内容と回答を公開してもいいですか')); // 旧公開許可フィールド
                const publishPermissionIndex = headers.findIndex(header =>
                    header.includes('回答を公開の許可')); // 新しい公開許可フィールド
                const categoryIndex = headers.findIndex(header =>
                    header.includes('カテゴリー')); // カテゴリーが含まれるカラムを探す
                //console.log(questionIndex, answerIndex, publishPermissionIndex, categoryIndex); // インデックスの確認（開発中のデバッグ用）
                // データを加工して必要な形式に整形
                const filteredData = rows.slice(1)  // ヘッダー行（0番目）をスキップして残りのデータ行を取得
                    // 両方の公開許可条件を満たすデータのみをフィルタリング
                    .filter(row => {
                        // 旧公開許可フィールドの値を取得
                        const oldPermission = row[publicPermissionIndex]?.toLowerCase();
                        // 新公開許可フィールドの値を取得
                        const newPermission = row[publishPermissionIndex]?.toLowerCase();
                        // 両方の条件を満たすもののみを通過させる
                        return oldPermission === 'はい' && newPermission === 'true';
                    })
                    // 必要なデータだけを抽出して新しいオブジェクト形式に変換
                    .map((row, index) => {
                        // カテゴリーの値を設定（デフォルトは「自治会について」）
                        let category = '自治会について';

                        // カテゴリー値が存在する場合は、その値に基づいて適切なカテゴリー文字列を設定
                        if (row[categoryIndex]) {
                            // 数値として解析（10進数）
                            const categoryValue = parseInt(row[categoryIndex], 10);
                            // 数値に応じて適切なカテゴリー名を設定
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
                                default: // 不明な値の場合はデフォルト値を使用
                                    category = '自治会について';
                            }
                        }

                        // 整形されたデータオブジェクトを返す
                        return {
                            id: index, // 連番ID（配列のインデックスを利用）
                            question: row[questionIndex], // 質問内容
                            answer: row[answerIndex], // 回答内容
                            category: category // カテゴリー
                        };
                    });

                // 加工したデータをステートに設定
                setData(filteredData);
                // データ取得完了でローディング状態を解除
                setLoading(false);
            })
            // エラーハンドリング - データ取得に失敗した場合の処理
            .catch(error => {
                console.error('Error:', error); // コンソールにエラー詳細を出力
                setError('データの取得に失敗しました'); // ユーザー向けエラーメッセージを設定
                setLoading(false); // ローディング状態を解除
            });
    }, []); // 空の依存配列 - コンポーネントのマウント時に一度だけ実行

    // ========== 検索とフィルタリング処理 ==========
    // 現在の検索語とカテゴリー選択に基づいてデータをフィルタリング
    const filteredQA = data.filter(qa =>
        // カテゴリーフィルタリング - 「すべて」が選択されているか、選択されたカテゴリーと一致する
        (selectedCategory === 'すべて' || qa.category === selectedCategory) &&
        // 検索語フィルタリング - 質問または回答に検索語が含まれているか確認
        (
            // ?. はオプショナルチェーン演算子で、プロパティが存在しない場合のエラーを防ぐ
            // toLowerCase()で大文字小文字を区別せずに検索
            qa.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            qa.answer?.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // ========== 条件付きレンダリング - ローディング中 ==========
    // データ読み込み中の表示
    if (loading) {
        return (
            <div className="flex justify-center items-center p-8">
                <p className="text-gray-600">質問データを読み込み中...</p>
            </div>
        );
    }

    // ========== 条件付きレンダリング - エラー発生時 ==========
    // エラー発生時の表示
    if (error) {
        return (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-600">{error}</p>
            </div>
        );
    }

    // ========== メインのUI表示 ==========
    return (
        <div>
            {/* ヘッダータイトル */}
            <h2 className="text-xl font-bold mb-6">質問と回答</h2>

            {/* 検索・フィルターUI */}
            <div className="flex flex-col md:flex-row gap-4 mb-6">
                {/* 検索入力フィールド */}
                <div className="flex-1 relative">
                    <input
                        type="text"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                        placeholder="質問を検索(一致している文言がある質問を表示します)"
                        value={searchTerm} // 現在の検索語をバインド
                        onChange={(e) => setSearchTerm(e.target.value)} // 入力値の変更を検知して状態を更新
                    />
                    {/* 検索アイコン - 入力フィールドの左側に配置 */}
                    <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
                </div>

                {/* カテゴリー選択ドロップダウン */}
                <select
                    className="md:w-48 p-2 border border-gray-300 rounded-lg"
                    value={selectedCategory} // 現在選択されているカテゴリーをバインド
                    onChange={(e) => setSelectedCategory(e.target.value)} // 選択値の変更を検知して状態を更新
                >
                    {/* カテゴリーリストをマップしてオプションを生成 */}
                    {categoriesList.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            {/* スクロール可能なQ&Aリストのコンテナ - 固定高さで内部スクロール */}
            <div className="h-96 overflow-y-auto pr-2">
                <div className="space-y-4">
                    {/* 条件に一致する質問がある場合とない場合で表示を切り替え */}
                    {filteredQA.length > 0 ? (
                        // 一致する質問がある場合 - 質問リストを表示
                        filteredQA.map((qa) => (
                            <div
                                key={qa.id} // Reactのリストレンダリングで必要な一意のキー
                                className="border rounded-lg hover:border-black transition-colors"
                            >
                                {/* 質問部分 - クリックで開閉する */}
                                <button
                                    className="w-full text-left p-4 flex items-start justify-between"
                                    onClick={() => setOpenQuestionId(openQuestionId === qa.id ? null : qa.id)}
                                >
                                    <div className="flex items-start">
                                        {/* 質問アイコン */}
                                        <HelpCircle size={24} className="mr-3 flex-shrink-0 mt-1" />
                                        <div>
                                            {/* カテゴリータグ */}
                                            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                {qa.category}
                                            </span>
                                            {/* 質問テキスト */}
                                            <h3 className="font-medium mt-2">{qa.question}</h3>
                                        </div>
                                    </div>
                                    {/* 開閉状態を示す矢印アイコン - 開いているときは180度回転 */}
                                    <ChevronDown
                                        size={20}
                                        className={`flex-shrink-0 transform transition-transform ${openQuestionId === qa.id ? 'rotate-180' : ''}`}
                                    />
                                </button>

                                {/* 回答部分 - 開いている質問IDと一致する場合のみ表示 */}
                                {openQuestionId === qa.id && (
                                    <div className="px-11 pb-4">
                                        {/* 回答を整形して表示 - URLを画像に変換 */}
                                        <div className="text-gray-600">
                                            {formatAnswerWithImages(qa.answer)}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        // 一致する質問がない場合 - メッセージを表示
                        <div className="text-center p-4 border rounded-lg">
                            <p className="text-gray-500">該当する質問が見つかりませんでした。</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

// コンポーネントをエクスポート - 他のファイルからインポートできるようにする
export default QAList;