import React from 'react';
import { MessageCircle } from 'lucide-react';

const QABoxHeader = () => {
    return (
        <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <MessageCircle className="w-8 h-8 text-blue-600" />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    質問箱(意見箱)
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                    自治会への意見や開催してほしいイベント、学生に聞きたい授業のこと、
                    学校生活での疑問など、何でも気軽に投稿してください。
                    <br />
                    <span className="text-blue-600 font-medium">みんなの声でより良い学生生活を作りましょう！</span>
                </p>

                <div className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium shadow-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    回答は2日以内に行います
                </div>
            </div>
        </section>
    );
};

export default QABoxHeader;