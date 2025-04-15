import React from 'react'
import { ArrowRight, Calendar, Users, } from 'lucide-react';

function PokePoke() {
    return (
        <div className="grid gap-6 sm:gap-8">
          {/* eスポーツイベント */}
          <div className="border border-black rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center">
              <div>
                <span className="inline-block bg-black text-white px-3 sm:px-4 py-1 text-xs sm:text-sm mb-3 sm:mb-4 rounded">
                  参加者募集中
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">eスポーツイベント</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  
                </p>
                <div className="space-y-3 mb-5 sm:mb-6">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium text-sm">開催期間</p>
                      <p className="text-gray-600 text-sm sm:text-base">2025年5月11日（日）11:00〜</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium text-sm">対象</p>
                      <p className="text-gray-600 text-sm sm:text-base">近大生</p>
                    </div>
                  </div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-flex items-center text-sm sm:text-base"
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLScYl-qxHnvv2ichLy7Kc26-ESx4j43e1Gr2bmgVAgBakdJRvg/viewform?usp=preview', '_blank')}>
                  応募フォームはこちら
                </button>
              </div>
              <div className="mt-4 md:mt-0 rounded-lg overflow-hidden">
                <img 
                  src={`${process.env.PUBLIC_URL}/img/pokepokeYoko.png`} 
                  alt="新入部員採用" 
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
            </div>    
        </div>
    )
}

export default PokePoke;