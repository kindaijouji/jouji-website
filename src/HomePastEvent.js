import React from 'react';
import { ArrowRight } from 'lucide-react';

const HomePastEvent = () => {
  // 過去のイベントデータ
  const pastEvents = [
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
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">過去のイベント</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pastEvents.map((event, index) => (
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
  );
};

export default HomePastEvent;