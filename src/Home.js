import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="min-h-screen">
            {/* ヒーローセクション */}
            <section className="h-screen relative overflow-hidden pt-16">
                <div className="absolute inset-0 bg-black"></div>
                <div className={`relative h-full flex items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                    <div className="max-w-7xl mx-auto px-4 w-full">
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            学生の力で、<br />
                            より良いキャンパスライフを。
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                            近畿大学情報学部自治会は、学生一人一人の声に耳を傾け、<br />
                            より良い学習環境と充実したキャンパスライフの実現を目指しています。
                        </p>
                        <button className="bg-white text-black px-8 py-3 rounded-none inline-flex items-center group hover:bg-gray-100 transition-all">
                            詳しく見る
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* 現在開催中のイベント */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">開催中のイベント</h2>
                    <div className="border border-black p-8 md:p-12">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <span className="inline-block bg-black text-white px-4 py-1 text-sm mb-4">
                                    参加者募集中
                                </span>
                                <h3 className="text-2xl font-bold mb-4">春の交流会 2025</h3>
                                <p className="text-gray-600 mb-6">
                                    新入生の皆さん、大学生活には慣れましたか？
                                    先輩たちと交流しながら、大学生活のアドバイスをもらいましょう！
                                </p>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-24">日時</span>
                                        <span>2025年4月15日（月）15:00～17:00</span>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-24">場所</span>
                                        <span>情報学部棟 1階ラウンジ</span>
                                    </li>
                                    <li className="flex items-center text-gray-600">
                                        <span className="w-24">対象</span>
                                        <span>情報学部1年生</span>
                                    </li>
                                </ul>
                                <button className="bg-black text-white px-6 py-3 rounded-none inline-flex items-center group hover:bg-gray-800 transition-all">
                                    参加申し込み
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                            <div className="bg-gray-100 h-64"></div>
                        </div>
                    </div>
                </div>
            </section>



            {/* 過去のイベント */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center">過去のイベント</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                title: '情報学部祭 2024',
                                date: '2024.07.15',
                                image: 'festival.jpg'
                            },
                            {
                                title: '学部長会談',
                                date: '2024.06.01',
                                image: 'meeting.jpg'
                            },
                            {
                                title: '新入生歓迎会',
                                date: '2024.04.10',
                                image: 'welcome.jpg'
                            }
                        ].map((event, index) => (
                            <div key={index} className="group">
                                <div className="bg-gray-100 h-48 mb-4 overflow-hidden">
                                    <div className="w-full h-full group-hover:scale-105 transition-transform duration-300"></div>
                                </div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-bold">{event.title}</h3>
                                    <span className="text-sm text-gray-500">{event.date}</span>
                                </div>
                                <button className="text-black group-hover:underline inline-flex items-center">
                                    詳しく見る
                                    <ArrowRight size={16} className="ml-1" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <button className="border-2 border-black text-black px-8 py-3 inline-flex items-center group hover:bg-black hover:text-white transition-all">
                            イベント一覧を見る
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;