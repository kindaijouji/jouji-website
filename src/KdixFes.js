import React from 'react';
import { Calendar, Users, ArrowRight, ChevronRight } from 'lucide-react';

const KdixFes = () => {
    return (
        <div className="min-h-screen pt-16">
            {/* ヒーローセクション */}
            <section className="relative h-screen">
                <div className="absolute inset-0 bg-black">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                </div>
                <div className="relative h-full flex items-center">
                    <div className="max-w-7xl mx-auto px-4 text-white">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            KDIX Festival 2025
                        </h1>
                        <p className="text-2xl mb-8 text-gray-300">
                            Technology × Creativity (予定)
                        </p>
                        <div className="flex flex-wrap gap-6 text-lg">
                            <div className="flex items-center">
                                <Calendar className="mr-2" />
                                2025.11.2 - 11.4 (予定)
                            </div>
                            <div className="flex items-center">
                                <Users className="mr-2" />
                                情報学部棟E101 (予定)
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 情報学部祭とは */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">情報学部祭とは</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg mb-6">
                                情報学部祭（KDIX Festival）は、近畿大学情報学部自治会の学生が主体となって開催する技術と創造性の祭典です。
                                プログラミングコンテスト、ハッカソン、研究発表など、様々なイベントを通じて情報技術の魅力を発信します。
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <div className="h-2 w-2 bg-black rounded-full mr-4"></div>
                                    学生による最新技術の展示
                                </li>
                                <li className="flex items-center">
                                    <div className="h-2 w-2 bg-black rounded-full mr-4"></div>
                                    企業との協同プロジェクト
                                </li>
                                <li className="flex items-center">
                                    <div className="h-2 w-2 bg-black rounded-full mr-4"></div>
                                    来場者参加型のワークショップ
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-100 h-80 rounded-lg"></div>
                    </div>
                </div>
            </section>

            {/* 2025年度開催情報 */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">開催情報</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-700">開催概要 <span className="text-sm text-gray-500 ml-2">企画検討中</span></h3>
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                                <p className="text-yellow-800">
                                    現在、KDIX Festival 2025の詳細を鋭意検討中です。イベントの具体的な日程、場所、内容については、只今準備を進めております。
                                </p>
                            </div>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-center">
                                    <span className="w-24 font-medium">日時</span>
                                    <span>調整中</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-24 font-medium">場所</span>
                                    <span>調整中</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-24 font-medium">入場料</span>
                                    <span>検討中</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-24 font-medium">対象</span>
                                    <span>検討中</span>
                                </li>
                            </ul>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <p className="text-gray-700 mb-2">最新情報をお待ちください</p>
                                <button className="bg-gray-200 text-gray-700 px-6 py-3 inline-flex items-center group cursor-not-allowed opacity-50">
                                    準備中
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-gray-700">イベント企画 <span className="text-sm text-gray-500 ml-2">検討中</span></h3>
                            <div className="space-y-4">
                                <div className="border-l-2 border-gray-300 pl-4">
                                    <h4 className="font-bold mb-1 text-gray-600">企画検討中</h4>
                                    <p className="text-gray-500">現在、魅力的なイベント内容を鋭意検討しております。学生と教職員が協力し、より良いフェスティバルの実現に向けて準備を進めています。</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p className="text-gray-600">
                                        昨年の成功を踏まえ、さらに革新的で魅力的なイベントを目指して企画を練っています。近日中に詳細を発表予定です。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 過去の開催実績 */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">過去の開催実績</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* 2024年の開催実績 */}
                        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-80"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white text-5xl font-bold">2024</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold">KDIX Festival 2024</h3>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">最新</span>
                                </div>
                                <div className="mb-6">
                                    <p className="text-gray-600 mb-2"><span className="font-medium">テーマ:</span> Digital Evolution</p>
                                    <p className="text-sm text-gray-500 bg-gray-50 p-2 rounded-md">初の2日間開催</p>
                                </div>
                                <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-lg transition-colors flex items-center justify-center group-hover:bg-blue-50">
                                    詳しく見る
                                    <ChevronRight size={16} className="ml-1" />
                                </button>
                            </div>
                        </div>

                        {/* 2023年の開催実績 */}
                        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 opacity-80"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white text-5xl font-bold">2023</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold">KDIX Festival 2023</h3>
                                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">記録更新</span>
                                </div>
                                <div className="mb-6">
                                    <p className="text-gray-600 mb-2"><span className="font-medium">テーマ:</span> Connect the Future</p>
                                    <p className="text-sm text-gray-500 bg-gray-50 p-2 rounded-md">来場者数1000人突破</p>
                                </div>
                                <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-lg transition-colors flex items-center justify-center group-hover:bg-green-50">
                                    詳しく見る
                                    <ChevronRight size={16} className="ml-1" />
                                </button>
                            </div>
                        </div>

                        {/* 2022年の開催実績 */}
                        <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="h-48 overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-80"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white text-5xl font-bold">2022</span>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <h3 className="text-xl font-bold">KDIX Festival 2022</h3>
                                    <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">アーカイブ</span>
                                </div>
                                <div className="mb-6">
                                    <p className="text-gray-600 mb-2"><span className="font-medium">テーマ:</span> New Normal Tech</p>
                                    <p className="text-sm text-gray-500 bg-gray-50 p-2 rounded-md">初のハイブリッド開催</p>
                                </div>
                                <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 py-2 px-4 rounded-lg transition-colors flex items-center justify-center group-hover:bg-orange-50">
                                    詳しく見る
                                    <ChevronRight size={16} className="ml-1" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default KdixFes;