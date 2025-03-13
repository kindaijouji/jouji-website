import React from 'react'
import { Calendar, Users } from 'lucide-react'
const KdixFesHeroSection = () => {
    return (
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
    )
}

export default KdixFesHeroSection