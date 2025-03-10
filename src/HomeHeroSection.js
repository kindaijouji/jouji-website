import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden pt-16 bg-black">
      <div className={`relative h-full flex items-center justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="space-y-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                学生の学生による
              </div>
              <div className={`transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                学生のための<span className="text-red-400">活動を</span>。
              </div>
            </h1>
            <p className={`text-xl text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              近畿大学情報学部自治会は、学部生のキャンパスライフが豊かになるように全力で取り組んでいます。
            </p>
            <div className={`transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link to="/about">
                <button className="bg-white text-black px-10 py-4 rounded-none inline-flex items-center group hover:bg-gray-100 transition-all">
                  詳しく見る
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;