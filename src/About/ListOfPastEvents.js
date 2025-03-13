import React from 'react'

const ListOfPastEvents = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">過去の活動</h2>
                <div className="bg-white p-6 shadow-sm rounded mt-10">
                    <h3 className="text-3xl font-bold mb-2 text-left border-b pb-2">2024</h3>
                    <div className="space-y-6">
                        {/* 令和5年12月 */}
                        <div className="border-b pb-4">
                            <h4 className="font-bold text-lg mb-4">12月</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">12月1日</span>
                                    <span>執行委員会会議（定例会）開催</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">12月4日</span>
                                    <span>中央執行委員会会議 出席</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">12月7日</span>
                                    <span>連絡協議会 出席</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">12月19-25日</span>
                                    <span>コース選択参考会 開催</span>
                                </li>
                            </ul>
                        </div>

                        {/* 令和6年2月 */}
                        <div className="border-b pb-4">
                            <h4 className="font-bold text-lg mb-4">2月</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">2月13日</span>
                                    <span>春期研修会 開催</span>
                                </li>
                            </ul>
                        </div>

                        {/* 令和6年4月 */}
                        <div className="border-b pb-4">
                            <h4 className="font-bold text-lg mb-4">4月</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">4月3日</span>
                                    <span>情報学部新入生歓迎会 開催</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">4月5-9日</span>
                                    <span>履修相談会 開催</span>
                                </li>
                            </ul>
                        </div>

                        {/* 令和6年5月 */}
                        <div className="border-b pb-4">
                            <h4 className="font-bold text-lg mb-4">5月</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">5月12日</span>
                                    <span>簡易研修会 開催</span>
                                </li>
                            </ul>
                        </div>

                        {/* 令和6年7月 */}
                        <div className="border-b pb-4">
                            <h4 className="font-bold text-lg mb-4">7月</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">7月1-5日</span>
                                    <span>合同七夕イベント〜星に願いを〜 開催</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">7月9-12日</span>
                                    <span>情報学部独自七夕イベント 開催</span>
                                </li>
                            </ul>
                        </div>

                        {/* 令和6年8月 */}
                        <div className="border-b pb-4">
                            <h4 className="font-bold text-lg mb-4">8月</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">8月1日</span>
                                    <span>令和6年度情報学部学部長会談 開催</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">8月27-28日</span>
                                    <span>夏期研修会 開催</span>
                                </li>
                            </ul>
                        </div>

                        {/* 令和6年10月 */}
                        <div className="border-b pb-4">
                            <h4 className="font-bold text-lg mb-4">10月</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">10月10-11日</span>
                                    <span>2024年合同ハロウィンイベント 開催</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">10月14日</span>
                                    <span>近大SBグランプリ 開催</span>
                                </li>
                            </ul>
                        </div>

                        {/* 令和6年11月 */}
                        <div>
                            <h4 className="font-bold text-lg mb-4">11月</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-gray-600 w-24 flex-shrink-0">11月26日</span>
                                    <span>情報学部秋期定例学生大会 ZOOM開催</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ListOfPastEvents