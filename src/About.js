import React from 'react';
import { Calendar, Users, Target, ChevronRight } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen pt-16">
            {/* メインビジュアル */}
            <section className="bg-black text-white py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        情報学部自治会について
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl">
                        学生一人一人の声を大切にし、より良い学習環境と
                        充実したキャンパスライフの実現を目指して活動しています。
                    </p>
                </div>
            </section>

            {/* ミッション */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-16 text-center">私たちの使命</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: '学生の声を届ける',
                                description: '学部長会談を通じて、学生の要望や意見を大学運営に反映させています。'
                            },
                            {
                                icon: Calendar,
                                title: 'イベントの企画運営',
                                description: '交流会や情報学部祭など、様々なイベントを通じて学生同士の繋がりを深めています。'
                            },
                            {
                                icon: Target,
                                title: '学習環境の向上',
                                description: '施設の改善提案や学習サポート制度の充実に取り組んでいます。'
                            }
                        ].map((item, index) => (
                            <div key={index} className="text-center p-6 border hover:border-black transition-colors">
                                <item.icon size={36} className="mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 活動実績 */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-16 text-center">活動実績</h2>
                    <div className="grid md:grid-cols-2 gap-8 ">
                        <div className="border p-8 bg-white">
                            <h3 className="text-2xl font-bold mb-6">2024年度の主な成果</h3>
                            <ul className="space-y-4">
                                <li className="flex items-center text-gray-600">
                                    <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                                    自習室の利用時間延長を実現
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                                    Wi-Fi環境の改善プロジェクトを推進
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                                    情報学部祭の来場者数が過去最高を記録
                                </li>
                                <li className="flex items-center text-gray-600">
                                    <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                                    オンライン質問箱システムの導入
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="text-center p-6 bg-white">
                                <div className="text-4xl font-bold text-black mb-2">1,000+</div>
                                <div className="text-gray-600">年間イベント参加者数</div>
                            </div>
                            <div className="text-center p-6 bg-white">
                                <div className="text-4xl font-bold text-black mb-2">24</div>
                                <div className="text-gray-600">年間イベント開催数</div>
                            </div>
                            <div className="text-center p-6 bg-white">
                                <div className="text-4xl font-bold text-black mb-2">90%</div>
                                <div className="text-gray-600">学生満足度</div>
                            </div>
                            <div className="text-center p-6 bg-white">
                                <div className="text-4xl font-bold text-black mb-2">50+</div>
                                <div className="text-gray-600">実現した改善提案</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 年間行事予定（月ごと） */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-16 text-center">年間行事予定</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                month: '4月',
                                events: ['新入生歓迎会', '春の交流会', '第1回学部長会談', '前期アンケート調査']
                            },
                            {
                                month: '5月',
                                events: ['前期アンケート調査結果報告']
                            },
                            {
                                month: '6月',
                                events: ['情報学部祭実行委員会発足']
                            },
                            {
                                month: '7月',
                                events: ['情報学部祭']
                            },
                            {
                                month: '8月',
                                events: ['夏季休暇中の施設改善提案']
                            },
                            {
                                month: '9月',
                                events: ['後期スタートアップイベント']
                            },
                            {
                                month: '10月',
                                events: ['第2回学部長会談']
                            },
                            {
                                month: '11月',
                                events: ['後期アンケート調査']
                            },
                            {
                                month: '12月',
                                events: ['冬季交流会', '次年度役員選挙']
                            },
                            {
                                month: '1月',
                                events: []
                            },
                            {
                                month: '2月',
                                events: ['年度末総会']
                            },
                            {
                                month: '3月',
                                events: ['引き継ぎ期間']
                            }
                        ].map((monthData, index) => (
                            <div key={index} className="bg-white border shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex items-center border-b p-4">
                                    <Calendar size={24} className="mr-3" />
                                    <h3 className="text-xl font-bold">{monthData.month}</h3>
                                </div>
                                <div className="p-5">
                                    {monthData.events.length > 0 ? (
                                        <ul className="space-y-3">
                                            {monthData.events.map((event, i) => (
                                                <li key={i} className="flex items-center text-gray-700">
                                                    <ChevronRight size={16} className="mr-2 flex-shrink-0" />
                                                    <span>{event}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-gray-500 italic text-center py-3">予定はありません</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 過去のイベント一覧 */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-16 text-center">過去のイベント一覧</h2>
                    <div className="grid gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                year: '2024',
                                events: [
                                    {
                                        title: '情報学部祭2024',
                                        date: '2024.07.15-16',
                                        description: 'テーマ「Technology & Creativity」のもと、2日間で1000名以上が来場。',
                                        image: '/api/placeholder/120/80'
                                    },
                                    {
                                        title: '春季交流会',
                                        date: '2024.04.20',
                                        description: '新入生歓迎イベント。学年を超えた交流の場を提供。',
                                        image: '/api/placeholder/120/80'
                                    }
                                ]
                            },
                            {
                                year: '2023',
                                events: [
                                    {
                                        title: '情報学部祭2023',
                                        date: '2023.07.14-15',
                                        description: '初の2日間開催。学生による技術展示が好評。',
                                        image: '/api/placeholder/120/80'
                                    },
                                    {
                                        title: '冬季交流会',
                                        date: '2023.12.10',
                                        description: '学年末の親睦イベント。プログラミングコンテストを実施。',
                                        image: '/api/placeholder/120/80'
                                    }
                                ]
                            }
                        ].map((yearGroup, index) => (
                            <div key={index} className="bg-white p-6 shadow-sm">
                                <h3 className="text-2xl font-bold mb-6 pb-2 border-b">{yearGroup.year}</h3>
                                <div className="space-y-6">
                                    {yearGroup.events.map((event, i) => (
                                        <div key={i} className="flex gap-6">
                                            <img src={event.image} alt={event.title} className="w-30 h-20 object-cover bg-gray-100" />
                                            <div>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h4 className="font-bold">{event.title}</h4>
                                                    <span className="text-sm text-gray-500">{event.date}</span>
                                                </div>
                                                <p className="text-gray-600 text-sm">{event.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;