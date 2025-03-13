import React from 'react'
import { Users, Calendar, Target } from 'lucide-react'

const Mission = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-16 text-center">私たちの使命</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Users,
                            title: '学生の声を届ける',
                            description: '学部長会談を通じて、学生の要望や意見を大学運営に伝え学習環境の向上を目標としています。'
                        },
                        {
                            icon: Calendar,
                            title: 'イベントの企画運営',
                            description: '学部間の壁を越え、大学生活がより豊かなものになることを目標としています。'
                        },
                        {
                            icon: Target,
                            title: '学生生活のサポート',
                            description: '学生生活のサポート,履修相談会や、傘の貸出など学生生活の質の向上を目指しています。'
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
    )
}

export default Mission