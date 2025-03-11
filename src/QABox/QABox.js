// QABox.js
import React from 'react';
import QAForm from './QAForm';
import QAList from './QAList';
import QABoxHeader from './QABoxHeader';

const QABox = () => {


    return (
        <div className="min-h-screen pt-16">
            {/* ヘッダーコンポーネント */}
            <QABoxHeader />

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