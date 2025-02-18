import React from 'react'

function About() {
    const scheduleItems = [
        { month: 1, events: [] },
        { month: 2, events: [] },
        { month: 3, events: [] },
        { month: 4, events: [] },
        { month: 5, events: [] },
        { month: 6, events: [] },
        { month: 7, events: [] },
        { month: 8, events: [] },
        { month: 9, events: [] },
        { month: 10, events: [] },
        { month: 11, events: [] },
        { month: 12, events: [] }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* 説明セクション */}
                <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">
                        情報学部自治会とは
                    </h1>
                    <div className="prose max-w-none text-gray-600">
                        <p className="text-lg leading-relaxed">
                            ここの内容は、情報学部自治会についての説明です。
                            今後考えましょう
                        </p>
                    </div>
                </section>

                {/* 年間活動予定表 */}
                <section className="bg-white rounded-xl shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        年間活動予定表
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {scheduleItems.map((item) => (
                            <div
                                key={item.month}
                                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-200">
                                    {item.month}月
                                </h3>
                                <div className="min-h-[100px] flex items-center justify-center text-gray-400">
                                    予定を追加
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 注意書き */}
                <div className="mt-6 text-center text-gray-500 text-sm">
                    ※ 活動予定は変更になる場合があります。
                    <br />
                    詳細は随時お知らせいたします。
                </div>
            </div>
        </div>
    )
}

export default About