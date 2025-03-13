import React from 'react'
import { ChevronRight, AlertCircle } from 'lucide-react';

const KdixFesPastInfo = () => {
    return (
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

                            </div>
                            <div className="mb-6">
                                <p className="text-gray-600 mb-2"><span className="font-medium">企画名:</span> デジタルフォンティア</p>
                                <p className="text-sm text-gray-500 bg-gray-50 p-2 rounded-md">WebアプリとUnityを使用した魔法RPGゲームの展示</p>
                            </div>
                            <a
                                href="https://kdixfes.com/jousai_home/jousai_home.html"
                                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                詳しく見る
                                <ChevronRight size={16} className="ml-1" />
                            </a>
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
                            </div>
                            <div className="mb-6">
                                <p className="text-gray-600 mb-2"><span className="font-medium">企画名:</span>電脳縁日</p>
                                <p className="text-sm text-gray-500 bg-gray-50 p-2 rounded-md">縁日をモチーフとしたゲームの展示</p>
                            </div>
                            <div className="w-full bg-gray-200 text-gray-500 py-2 px-4 rounded-lg flex items-center justify-center cursor-not-allowed">
                                <AlertCircle size={16} className="mr-2" />
                                詳細情報がありません
                            </div>
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
                            </div>
                            <div className="mb-6">
                                <p className="text-gray-600 mb-2"><span className="font-medium">テーマ:</span> 脱出ゲーム</p>
                                <p className="text-sm text-gray-500 bg-gray-50 p-2 rounded-md">情報がありませんでした🙇</p>
                            </div>
                            <div className="w-full bg-gray-200 text-gray-500 py-2 px-4 rounded-lg flex items-center justify-center cursor-not-allowed">
                                <AlertCircle size={16} className="mr-2" />
                                詳細情報がありません
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default KdixFesPastInfo