import React from 'react';
import { ArrowRight, Calendar, MapPin, Users, Clock } from 'lucide-react';

const HomeCurrentEvent = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* タイトル */}
        <h2 className="text-4xl font-bold relative inline-block mb-8 sm:mb-10">
          <span className="relative z-10">開催中のイベント</span>
          <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200 opacity-50 z-0"></span>
        </h2>

        <div className="grid gap-6 sm:gap-8">
          {/* 新入生歓迎会 */}
          <div className="border border-black rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center">
              <div>
                <span className="inline-block bg-black text-white px-3 sm:px-4 py-1 text-xs sm:text-sm mb-3 sm:mb-4 rounded">
                  参加者募集中
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">新入生歓迎会</h3>
                {/* 紹介文 */}
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  新入生の皆さんを歓迎するイベントです！
                  情報学部の授業や情報学部自治会についてのご紹介をさせていただきます！
                  そして、最後には景品付きのビンゴ大会を開催させていただきます！
                  新入生の皆さんにとって有益なことばかり！ぜひ少しでもご興味があるのでしたらご参加を！
                </p>
                <div className="space-y-3 mb-5 sm:mb-6">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium text-sm">開催日</p>
                      <p className="text-gray-600 text-sm sm:text-base">2025年4月2日（水）</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium text-sm">時間</p>
                      <p className="text-gray-600 text-sm sm:text-base">ブートキャンプ終了後</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium text-sm">場所</p>
                      <p className="text-gray-600 text-sm sm:text-base">未定</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium text-sm">対象</p>
                      <p className="text-gray-600 text-sm sm:text-base">情報学部の新入生の方々</p>
                    </div>
                  </div>
                </div>
                {/* <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-flex items-center group hover:bg-gray-800 transition-all text-sm sm:text-base">
                  参加申し込み
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button> */}
              </div>
              <div className="mt-4 md:mt-0 rounded-lg overflow-hidden">
                {/*  */}
                <img 
                  src={`${process.env.PUBLIC_URL}/img/shinkan.png`} 
                  alt="新入生歓迎会" 
                  className="w-full h-40 sm:h-48 md:h-64 object-cover"
                />
              </div>
            </div>
          </div>

          {/* 新入部員採用 */}
          <div className="border border-black rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center">
              <div>
                <span className="inline-block bg-black text-white px-3 sm:px-4 py-1 text-xs sm:text-sm mb-3 sm:mb-4 rounded">
                  部員募集中
                </span>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">新入部員採用</h3>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  情報学部自治会の部員を募集いたします。
                  情報学部自治会では様々なイベントの開催や情報学部生の方々の学生生活をより良くしていくよう努めています！
                  新しいことへ挑戦したい方！情報学部をよりよくしたい方！どんな理由でも構いません！
                  ぜひご応募をして私たちの一員になりましょう！
                </p>
                <div className="space-y-3 mb-5 sm:mb-6">
                  <div className="flex items-start">
                    <Calendar className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium text-sm">募集期間</p>
                      <p className="text-gray-600 text-sm sm:text-base">2025年4月2日（水）〜2025年4月12日（土）</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <div className="ml-3">
                      <p className="text-gray-900 font-medium text-sm">対象</p>
                      <p className="text-gray-600 text-sm sm:text-base">情報学部の新入生の方々</p>
                    </div>
                  </div>
                </div>
                <button className="bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-flex items-center group hover:bg-gray-800 transition-all text-sm sm:text-base">
                  応募フォーム
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="mt-4 md:mt-0 rounded-lg overflow-hidden">
                <img 
                  src={`${process.env.PUBLIC_URL}/img/buinsaiyou.png`} 
                  alt="新入部員採用" 
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCurrentEvent;