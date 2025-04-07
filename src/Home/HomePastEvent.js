import React, { useState } from 'react';
import { ChevronRight, X, Calendar, Users, Trophy, DoorOpen } from 'lucide-react';

const HomePastEvent = () => {
  // 過去のイベントデータ
  const pastEvents = [
    {
      title: '学部長会談',
      date: '2024.08.01',
      icon: <Users size={28} />,
      color: 'bg-gradient-to-br from-blue-400 to-blue-600',
      iconColor: 'text-blue-500',
      details: 'この会談は年に1度開催され、学部生が学部へ抱えている不満や要望を伝える場となっております。学部長代理や学部長補佐などの教授の方々、学生センターや学生部の職員の方々へ学生の声をお届けいたしました。'
    },
    {
      title: 'R6年度新入生歓迎会',
      date: '2024.04.03',
      icon: <DoorOpen size={28} />,
      color: 'bg-gradient-to-br from-green-400 to-green-600',
      iconColor: 'text-green-500',
      details: '令和6年度にご入学された新入生の皆様を歓迎するイベントでございます。情報学部自治会のご紹介やE館の施設案内、そして授業に関するご説明をさせていただきました。また、ビンゴ大会も開催いたしました。'
    },
    {
      title: 'eスポーツイベント',
      date: '2024.10.14',
      icon: <Trophy size={28} />,
      color: 'bg-gradient-to-br from-purple-400 to-purple-600',
      iconColor: 'text-purple-500',
      details: 'esports Arenaで大乱闘スマッシュブラザーズの大会を開催いたしました。大会では皆様が楽しめるようにダブルエリミネーションと呼ばれる負けても続行が可能な形式を取りました。'
    },
    {
      title: 'R7年度新入生歓迎会',
      date: '2025.04.02',
      icon: <DoorOpen size={28} />,
      color: 'bg-gradient-to-br from-red-400 to-red-600',
      iconColor: 'text-red-500',
      details: '令和7年度にご入学されました新入生の皆様を歓迎するイベントでございます。情報学部自治会の紹介、E館の施設案内、そして授業に関する概要説明などをさせていただきました。最後は、様々な景品が揃ったビンゴ大会を開催させていただき、昨年を上回る盛り上がりを見せました。'
    }
  ];

  // 各イベントの詳細表示状態を管理する状態
  const [expandedEvents, setExpandedEvents] = useState({});

  // 詳細表示の切り替え関数
  const toggleDetails = (index) => {
    setExpandedEvents({
      // すべてのイベントを閉じた状態にリセット
      ...Object.keys(expandedEvents).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {}),
      // クリックされたイベントのみトグル
      [index]: !expandedEvents[index]
    });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold relative inline-block">
            <span className="relative z-10">過去のイベント</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200 opacity-50 z-0"></span>
          </h2>
        </div>

        <div className="flex flex-wrap -mx-4">
          {pastEvents.map((event, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/* カラフルなヘッダー部分 */}
                <div className={`${event.color} h-24 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute right-0 bottom-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-8 -mb-8"></div>
                  <div className="absolute left-0 top-0 w-16 h-16 bg-white opacity-10 rounded-full -ml-4 -mt-4"></div>
                </div>

                {/* アイコン部分（ヘッダーとコンテンツにまたがる） */}
                <div className="relative -mt-10 mx-6">
                  <div className="bg-white p-4 rounded-full shadow-lg inline-block">
                    <div className={`${event.iconColor}`}>
                      {event.icon}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="flex flex-col mb-5">
                    <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>{event.date}</span>
                    </div>
                  </div>

                  {/* 詳細表示エリア（開かれている場合のみ表示） */}
                  {expandedEvents[index] && (
                    <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <p>{event.details}</p>
                    </div>
                  )}

                  {/* ボタン部分 */}
                  <button
                    onClick={() => toggleDetails(index)}
                    className={`w-full px-5 py-3 rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-300 ${expandedEvents[index]
                        ? "bg-gray-100 text-gray-800 hover:bg-gray-200"
                        : "bg-red-400 text-white hover:bg-red-500 shadow-md hover:shadow-lg"
                      }`}
                  >
                    {expandedEvents[index] ? (
                      <>
                        <X size={16} className="mr-2" />
                        <span>閉じる</span>
                      </>
                    ) : (
                      <>
                        <ChevronRight size={16} className="mr-2" />
                        <span>詳しく見る</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="text-center mt-12">
          <button className="border-2 border-black text-black px-8 py-3 inline-flex items-center group hover:bg-black hover:text-white transition-all">
            イベント一覧を見る
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default HomePastEvent;