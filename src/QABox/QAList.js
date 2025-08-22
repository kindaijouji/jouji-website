import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, HelpCircle } from 'lucide-react';

const QAList = () => {
    // ========== 状態管理（State）の定義 ==========
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('すべて');
    const [openQuestionId, setOpenQuestionId] = useState(null);

    const categoriesList = ['すべて', '自治会について', 'イベント', '学校生活', 'その他'];

    // ダミーデータ（CSVデータが取得できない場合の表示用）
    const dummyData = [
        {
            id: 1,
            question: "ゲーム大会などの開催予定はありますか！",
            answer: "すみません、今のところ開催予定はありません。ゲーム大会を開いてほしいと言う意見が多数出てきたら、開催に向けて動いていこうと思っています！！",
            category: "イベント"
        },
        {
            id: 2,
            question: "2025年度の前期の成績開示っていつですか?",
            answer: "ユニパによると8/27の午前5時からだそうです!!",
            category: "学校生活"
        },
    ];

    // テキストの改行を処理する共通関数
    const formatTextWithLineBreaks = (text) => {
        if (!text) return '';

        return text.split('\n').map((line, i, arr) => (
            <React.Fragment key={i}>
                {line}
                {i < arr.length - 1 && <br />}
            </React.Fragment>
        ));
    };

    // テキスト内のURLを検出して画像またはリンク表示に変換する関数
    const formatAnswerWithImages = (text) => {
        if (!text) return '回答準備中です';

        const isGoogleDriveUrl = (url) => {
            return url.includes('drive.google.com/file/d/') && url.includes('view');
        };

        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const parts = [];
        let lastIndex = 0;
        let match;

        while ((match = urlRegex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                parts.push({
                    type: 'text',
                    content: formatTextWithLineBreaks(text.substring(lastIndex, match.index))
                });
            }

            parts.push({
                type: 'url',
                content: match[0]
            });

            lastIndex = match.index + match[0].length;
        }

        if (lastIndex < text.length) {
            parts.push({
                type: 'text',
                content: formatTextWithLineBreaks(text.substring(lastIndex))
            });
        }

        return (
            <>
                {parts.map((part, index) => {
                    if (part.type === 'text') {
                        return <span key={index}>{part.content}</span>;
                    } else if (part.type === 'url') {
                        const url = part.content;
                        if (isGoogleDriveUrl(url)) {
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

    useEffect(() => {
        const url = process.env.REACT_APP_URL;
        console.log('Fetching URL:', url);

        fetch(url)
            .then(response => {
                console.log('Response status:', response.status);
                console.log('Response headers:', response.headers);
                return response.text();
            })
            .then(csvData => {
                console.log('CSV Data length:', csvData.length);
                console.log('CSV Data preview:', csvData.substring(0, 200));
                function parseCSV(text) {
                    const result = [];
                    let row = [];
                    let entry = '';
                    let inQuotes = false;

                    for (let i = 0; i < text.length; i++) {
                        const char = text[i];

                        if (char === '"') {
                            if (inQuotes && text[i + 1] === '"') {
                                entry += '"';
                                i++;
                            } else {
                                inQuotes = !inQuotes;
                            }
                        } else if (char === ',' && !inQuotes) {
                            row.push(entry.trim());
                            entry = '';
                        } else if (char === '\n' && !inQuotes) {
                            row.push(entry.trim());
                            if (row.some(cell => cell)) {
                                result.push(row);
                            }
                            row = [];
                            entry = '';
                        } else {
                            entry += char;
                        }
                    }

                    if (entry || row.length > 0) {
                        row.push(entry.trim());
                        if (row.some(cell => cell)) {
                            result.push(row);
                        }
                    }

                    return result;
                }

                const rows = parseCSV(csvData);
                const headers = rows[0];

                const questionIndex = headers.findIndex(h => h === '質問内容');
                const answerIndex = headers.findIndex(h => h === '自治会の回答');
                const publishPermissionIndex = headers.findIndex(h => h === '回答を公開の許可');
                const categoryIndex = headers.findIndex(h => h === 'カテゴリーを選択してください');

                const filteredData = rows
                    .slice(1)
                    .filter(row => {
                        if (row.length < headers.length) return false;
                        const publishPermission = row[publishPermissionIndex];
                        return publishPermission === 'TRUE';
                    })
                    .map((row, index) => ({
                        id: index,
                        question: row[questionIndex] || '',
                        answer: row[answerIndex] || '',
                        category: row[categoryIndex] || '自治会について'
                    }));

                // CSVデータとダミーデータを結合して表示
                const combinedData = [...dummyData, ...filteredData];
                setData(combinedData);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                console.log('CSVデータの取得に失敗しました。ダミーデータのみを表示します。');
                setData(dummyData);
                setLoading(false);
            });
    }, []);

    const filteredQA = data.filter(qa =>
        (selectedCategory === 'すべて' || qa.category === selectedCategory) &&
        (
            qa.question?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            qa.answer?.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    if (loading) {
        return (
            <div className="flex justify-center items-center p-8">
                <p className="text-gray-600">質問データを読み込み中...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-600">{error}</p>
            </div>
        );
    }

    return (
        <div>
            <h2 className="text-xl font-bold mb-6">質問と回答</h2>

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
                                            <h3 className="font-medium mt-2">
                                                {formatTextWithLineBreaks(qa.question)}
                                            </h3>
                                        </div>
                                    </div>
                                    <ChevronDown
                                        size={20}
                                        className={`flex-shrink-0 transform transition-transform ${openQuestionId === qa.id ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                {openQuestionId === qa.id && (
                                    <div className="px-11 pb-4">
                                        <div className="text-gray-600">
                                            {formatAnswerWithImages(qa.answer)}
                                        </div>
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