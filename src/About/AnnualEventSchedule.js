import React from 'react'
import { Calendar, ChevronRight } from 'lucide-react'
const AnnualEventSchedule = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-16 text-center">年間行事予定</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            month: '4月',
                            events: ['新入生歓迎会', '履修相談会', '部員採用']
                        },
                        {
                            month: '5月',
                            events: ['Eスポーツイベント']
                        },
                        {
                            month: '6月',
                            events: []
                        },
                        {
                            month: '7月',
                            events: ['デジタル七夕']
                        },
                        {
                            month: '8月',
                            events: ['学部長会談']
                        },
                        {
                            month: '9月',
                            events: ['IRイベント(仮)']
                        },
                        {
                            month: '10月',
                            events: ['合同ハロウィン']
                        },
                        {
                            month: '11月',
                            events: ["生駒祭", '学生大会']
                        },
                        {
                            month: '12月',
                            events: ['コース別参考会']
                        },
                        {
                            month: '1月',
                            events: []
                        },
                        {
                            month: '2月',
                            events: []
                        },
                        {
                            month: '3月',
                            events: []
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
                                    <p className="text-gray-500 italic text-center py-3"></p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AnnualEventSchedule