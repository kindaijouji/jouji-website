import React from 'react';
// import HomeHeroSection from './HomeHeroSection';
import HomeCurrentEvent from './HomeCurrentEvent';
import HomePastEvent from './HomePastEvent';
import GHomeHeroSection from './GHomeHeroSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <GHomeHeroSection />
      
      {/* 現在開催中のイベント */}
      <HomeCurrentEvent />
      
      {/* 過去のイベント */}
      <HomePastEvent />
    </div>
  );
};

export default Home;