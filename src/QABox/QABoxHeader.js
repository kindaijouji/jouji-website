// QABoxHeader.js
import React from 'react';

const QABoxHeader = () => {
    // 共通のタイトルとテキスト
    const title = "質問箱";
    const description = (
        <>
            自治会への質問や要望を受け付けています。<br />
            皆さんの声を私たちの活動に活かしていきます。<br />
            学校生活のことなど、何でもお気軽に質問してください！
        </>
    );

    // 幾何学模様を使ったモダンデザイン
    // return (
    //     <section className="bg-indigo-900 text-white py-20 relative overflow-hidden">
    //         {/* 幾何学模様の背景 */}
    //         <div className="absolute inset-0 opacity-10">
    //             <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
    //             <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-500 rounded-full"></div>
    //             <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
    //         </div>

    //         <div className="max-w-7xl mx-auto px-4 relative z-10">
    //             <div className="md:flex md:items-center md:justify-between">
    //                 <div>
    //                     <h1 className="text-5xl font-extrabold mb-2">{title}</h1>
    //                     <div className="h-1 w-20 bg-yellow-400 mb-6"></div>
    //                     <p className="text-xl text-gray-300 max-w-2xl">
    //                         {description}
    //                     </p>
    //                 </div>
    //                 <div className="mt-8 md:mt-0">
    //                     <div className="inline-flex items-center px-6 py-3 bg-white text-indigo-900 rounded-lg shadow-lg font-medium">
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
    //                             <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    //                         </svg>
    //                         よくある質問を見る
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </section>
    // );


    // カード型デザイン
    return (
        <section className="bg-gray-50 py-20">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-2/3 p-8 md:p-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                            <h1 className="text-4xl font-bold mb-4">{title}</h1>
                            <p className="text-xl text-gray-100">
                                {description}
                            </p>
                            <div className="mt-6 inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm">
                                回答は2日以内に行います!
                            </div>
                        </div>
                        <div className="md:w-1/3 flex items-center justify-center p-8 bg-blue-50">
                            <div className="w-48 h-48 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    // フォールバック（デフォルトと同じ）
    // return (
    //     <section className="bg-black text-white py-20">
    //         <div className="max-w-7xl mx-auto px-4">
    //             <h1 className="text-4xl font-bold mb-6">{title}</h1>
    //             <p className="text-xl text-gray-300 max-w-3xl">
    //                 {description}
    //             </p>
    //         </div>
    //     </section>
    // );
};

export default QABoxHeader;