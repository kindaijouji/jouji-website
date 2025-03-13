import React from 'react'
const ActivityResults = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-16 text-center">活動実績</h2>
                <div className="max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="text-center p-6 bg-white">
                            <div className="text-4xl font-bold text-black mb-2">3000+</div>
                            <div className="text-gray-600">年間イベント参加者数</div>
                        </div>
                        <div className="text-center p-6 bg-white">
                            <div className="text-4xl font-bold text-black mb-2">15</div>
                            <div className="text-gray-600">年間イベント開催数</div>
                        </div>
                        <div className="text-center p-6 bg-white">
                            <div className="text-4xl font-bold text-black mb-2">75%</div>
                            <div className="text-gray-600">学部長会談アンケート<br />回答率</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ActivityResults