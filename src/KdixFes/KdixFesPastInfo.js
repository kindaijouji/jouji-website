import React from 'react'
import { ChevronRight } from 'lucide-react';
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
    )
}

export default KdixFesPastInfo