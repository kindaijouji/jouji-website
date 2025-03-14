// QABox.js
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import QAForm from './QAForm';
import QAList from './QAList';
import QABoxHeader from './QABoxHeader';

const QABox = () => {
    const location = useLocation();
    const qaformRef = useRef(null);
    const qalistRef = useRef(null);

    useEffect(() => {
        if (location.hash === '#qa-form' && qaformRef.current) {
            qaformRef.current.scrollIntoView();
        } else if (location.hash === '#qa-list' && qalistRef.current) {
            qalistRef.current.scrollIntoView();
        } 
    }, []);

    return (
        <div className="min-h-screen pt-16">
            {/* ヘッダーコンポーネント */}
            <QABoxHeader />

            {/* メインコンテンツ */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* 左側：質問フォーム */}
                    <div ref={qaformRef} id="qa-form" className="md:col-span-1">
                        <QAForm />
                    </div>

                    {/* 右側：Q&A一覧 */}
                    <div ref={qalistRef} id="qa-list" className="md:col-span-2">
                        <QAList />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QABox;