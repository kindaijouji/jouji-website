import React from 'react'
import { ArrowRight } from 'lucide-react'
const Kdixfes2025 = () => {
    return (
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
                                <p className="text-gray-500">現在、魅力的なイベント内容を鋭意検討しております。学生と教職員が協力し、より良い企画の実現に向けて準備を進めています。</p>
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
    )
}

export default Kdixfes2025