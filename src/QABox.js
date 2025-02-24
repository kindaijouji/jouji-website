// QABox.js
import React, { useState } from 'react';
import QAForm from './QAForm';
import QAList from './QAList';
import QABoxHeader, { HEADER_STYLES } from './QABoxHeader';

const QABox = () => {
    // 現在のヘッダースタイルを管理するstate
    const [headerStyle, setHeaderStyle] = useState(HEADER_STYLES.BLACK);

    // ヘッダースタイルの選択肢
    const headerOptions = [
        { id: HEADER_STYLES.BLACK, name: '黒背景（オリジナル）' },
        { id: HEADER_STYLES.GRADIENT_PURPLE, name: '紫のグラデーション' },
        { id: HEADER_STYLES.GEOMETRIC, name: '幾何学模様デザイン' },
        { id: HEADER_STYLES.CARD_STYLE, name: 'カード型デザイン' },
        { id: HEADER_STYLES.MINIMAL, name: 'ミニマルデザイン' }
    ];

    return (
        <div className="min-h-screen pt-16">
            {/* スタイル切り替えセレクタ（開発時のみ表示、本番では削除可能） */}
            <div className="bg-gray-100 py-2 px-4">
                <div className="max-w-7xl mx-auto flex items-center text-sm">
                    <span className="mr-2 font-medium">ヘッダースタイル:</span>
                    <select
                        value={headerStyle}
                        onChange={(e) => setHeaderStyle(e.target.value)}
                        className="border border-gray-300 rounded px-2 py-1"
                    >
                        {headerOptions.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* ヘッダーコンポーネント */}
            <QABoxHeader style={headerStyle} />

            {/* メインコンテンツ */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* 左側：質問フォーム */}
                    <div className="md:col-span-1">
                        <QAForm />
                    </div>

                    {/* 右側：Q&A一覧 */}
                    <div className="md:col-span-2">
                        <QAList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QABox;