import React from 'react';
import KasaKasi from './KasaKasi';
import GakubuchouKaidan from './Gakubucho';
//ArrowRight部員採用を開始したら追加する
const HomeCurrentEvent = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* タイトル */}
        <h2 className="text-4xl font-bold relative inline-block mb-8 sm:mb-10">
          <span className="relative z-10">開催中のイベント</span>
          <span className="absolute bottom-1 left-0 w-full h-3 bg-red-200 opacity-50 z-0"></span>
        </h2>
        {/* イベント一覧 */}
        <GakubuchouKaidan />
        <div className='my-8' />
        <KasaKasi />
      </div>

    </section>
  );
};

export default HomeCurrentEvent;