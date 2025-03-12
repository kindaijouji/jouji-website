import React, { useState } from 'react';
import { ChevronRight, X, Users, DoorOpen, Trophy } from 'lucide-react';

const HomePastEvent = () => {
  // 過去のイベントデータ
  const pastEvents = [
    {
      title: '学部長会談',
      date: '2024.08.01',
      icon: <Users size={24} />,
      color: 'bg-gray-100',
      iconColor: 'text-gray-500',
      details: 'この会談は年に1度開催され、学部生が学部へ抱えている不満や要望を伝える場となっております。学部長代理や学部長補佐などの教授の方々、学生センターや学生部の職員の方々へ学生の声をお届けいたしました。'
    },
    {
      title: '新入生歓迎会',
      date: '2024.04.03',
      icon: <DoorOpen size={24} />,
      color: 'bg-gray-100',
      iconColor: 'text-gray-500',
      details: '令和6年度にご入学された新入生の皆様を歓迎するイベントでございます。情報学部自治会のご紹介やE館の施設案内、そして授業に関するご説明をさせていただきました。また、ビンゴ大会も開催いたしました。'
    },
    {
      title: 'eスポーツイベント',
      date: '2024.10.14',
      icon: <Trophy size={24} />,
      color: 'bg-gray-100',
      iconColor: 'text-gray-500',
      details: 'esports Arenaで大乱闘スマッシュブラザーズの大会を開催いたしました。大会では皆様が楽しめるようにダブルエリミネーションと呼ばれる負けても続行が可能な形式を取りました。'
    }
  ];

  // 各イベントの詳細表示状態を管理する状態
  const [expandedEvents, setExpandedEvents] = useState({});

  // 詳細表示の切り替え関数
  const toggleDetails = (index) => {
    setExpandedEvents(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold relative inline-block">
            <span className="relative z-10">過去のイベント</span>
            <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200 opacity-50 z-0"></span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {pastEvents.map((event, index) => (
            <div key={index} className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              {/* 背景部分 */}
              <div className={`${event.color} h-32 relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-white to-transparent"></div>
                
                {/* アイコンを左下に配置 */}
                <div className="absolute bottom-4 left-4">
                  <div className={`${event.iconColor} bg-white p-3 rounded-full shadow-md`}>
                    {event.icon}
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">{event.title}</h3>
                  <span className="text-sm text-gray-500 font-medium border-b border-gray-200 pb-1">{event.date}</span>
                </div>
                
                {/* ボタンデザイン */}
                <button 
                  onClick={() => toggleDetails(index)} 
                  className={`w-full mt-2 px-4 py-2 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                    expandedEvents[index] 
                      ? "bg-gray-100 text-gray-800 hover:bg-gray-200" 
                      : "bg-red-400 text-white hover:bg-red-500"
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
                
                {/* 詳細表示エリア */}
                {expandedEvents[index] && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <p>{event.details}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePastEvent;