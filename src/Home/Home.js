import React from 'react';
// import HomeHeroSection from './HomeHeroSection';
import HomeCurrentEvent from './HomeCurrentEvent';
import HomePastEvent from './HomePastEvent';
import HomeHeroSection from './HomeHeroSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <HomeHeroSection />
      
      {/* 現在開催中のイベント */}
      <HomeCurrentEvent />
      
      {/* 過去のイベント */}
      <HomePastEvent />
    </div>
  );
};

export default Home;