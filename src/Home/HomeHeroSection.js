import React, { useState, useEffect } from 'react';
// import { ArrowRight } from 'lucide-react';
// import { Link } from 'react-router-dom';

/*const HomeHeroSection = () => {
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
*/


const HomeHeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
    "/Picture/KKK.jpeg",
    "/Picture/フグ.jpg",
    "/Picture/Satsuki.jpeg",
    "/Picture/yamap.jpg",
    "/Picture/くっきー.jpeg",
    "/Picture/ぱゃ.jpeg",
    "/Picture/ファイアワークス.jpeg",
    "/Picture/ぽんず.jpeg",
    "/Picture/れこれこ.jpeg",
    "/Picture/単位ナイナイ.jpeg",
    "/Picture/浮世.jpeg",
    "/Picture/名声.jpeg",
    "/Picture/٩( ᐛ )و.jpeg",
    "/Picture/10秒.jpeg",
    "/Picture/pullriku.jpeg",
    "/Picture/Sasaki.jpeg",
    "/Picture/カイト.jpeg",
    "/Picture/ガッシュ.jpeg",
    "/Picture/トマト.jpeg",
    "/Picture/むわ.jpeg",
    "/Picture/携帯が死ぬ0.5秒前.jpg",
    "/Picture/限界小学生.jpeg",
    "/Picture/校内4位.jpeg",
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // 5秒ごとに画像を切り替え

    return () => clearInterval(imageInterval);
  }, [backgroundImages.length]);

  return (
    <section className="h-screen relative overflow-hidden bg-black">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Background slide"
            className={`w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/1920x1080/000000/ffffff?text=Image+Missing'; }}
          />
        ))}
        {/* 写真の上に重ねる暗いフィルターです。bg-opacity-50で透明度を50%に設定しています。 */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* テキストとボタンを配置するコンテナです。flex-colで縦に並べます。 */}
      <div className="relative h-full flex flex-col items-center z-10">

        {/* このラッパーが縦方向の余白を全て使い、中のh1要素を中央に配置します。 */}
        <div className="flex-grow flex flex-col items-center justify-center">
          <h1
            className="text-white text-4xl md:text-6xl font-light text-center px-6
             tracking-wide leading-snug
             drop-shadow-[0_3px_6px_rgba(0,0,0,0.6)]
             italic"
          >
            写真大会結果発表中
          </h1>
        </div>

        {/* ボタン用のラッパーです。画面下部に配置し、下部に余白(padding-bottom)を設けます。 */}
        <div className="pb-32 md:pb-40">
          <a
            href="https://kindaijouji.com/#/iroseka" // TODO: リンク先のURLをここに追加してください
            className="mt-10 px-8 py-4 bg-white text-black font-semibold
                       text-lg rounded-full
                       transition-transform duration-300 ease-in-out
                       transform hover:scale-110 focus:outline-none"
          >
            結果を見に行く
          </a>
        </div>

      </div>
    </section>
  );
};

export default HomeHeroSection;