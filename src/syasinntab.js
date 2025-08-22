import React, { useState, useEffect, useRef } from 'react';
import { Camera, Info, ChevronDown, ChevronUp, Image as ImageIcon, FileText, Award, Users, Shield, Send } from 'lucide-react';

// --- サンプルのギャラリーコンポーネント ---
function PhotoGallery() {
    const [isExpanded, setIsExpanded] = useState(false);
    const sampleImages = [
        "/Picture/sample1.png",
        "/Picture/sample2.png",
        "/Picture/sample4.jpg",
        "/Picture/sample5.png",
    ];
    const toggleGallery = () => setIsExpanded(prev => !prev);
    const imagesToShow = isExpanded ? sampleImages : sampleImages.slice(0, 3);

    return (
        <div>
            {/* ▼▼▼ ここからが変更箇所 ▼▼▼ */}
            {/* 1. レイアウトを整然としたグリッドに戻す */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {imagesToShow.map((src, index) => (
                    // 2. コンテナの高さを固定し、背景色と中央揃えを追加
                    <div key={index} className="h-56 md:h-64 overflow-hidden rounded-lg shadow-md group bg-gray-100 flex items-center justify-center p-2">
                        <img 
                            src={src} 
                            alt={`サンプル作品 ${index + 1}`}
                            // 3. object-containで画像の比率を保ちつつ全体を表示
                            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x300/cccccc/ffffff?text=Error'; }}
                        />
                    </div>
                ))}
            </div>
            {/* ▲▲▲ ここまでが変更箇所 ▲▲▲ */}
            <div className="mt-8">
                <button
                    onClick={toggleGallery}
                    className="flex items-center mx-auto px-4 py-2 rounded-lg font-semibold transition bg-gray-100 hover:bg-gray-200 text-gray-700"
                >
                    {isExpanded ? '一部を隠す' : 'すべての作品を見る'}
                    {isExpanded ? <ChevronUp size={18} className="ml-1" /> : <ChevronDown size={18} className="ml-1" />}
                </button>
            </div>
        </div>
    );
}

// --- メインのコンポーネント ---
function PhotoContestPage() {
    const [activeContent, setActiveContent] = useState('gallery');
    const canvasRef = useRef(null);

    // 背景のパーティクルアニメーション
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        
        resizeCanvas();

        let particles = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 1.5 + 0.5,
                vx: Math.random() * 1 - 0.5,
                vy: Math.random() * 1 - 0.5,
                opacity: Math.random() * 0.4 + 0.1
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                ctx.fill();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();
        
        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);


    return (
        // pt-16をpt-32に変更して、上の余白を増やしました
        <div className="min-h-screen flex justify-center bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 p-4 pt-32">
            <style>
                {`
                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-8px); }
                        100% { transform: translateY(0px); }
                    }
                    .float-animation {
                        animation: float 3s ease-in-out infinite;
                    }
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .fade-in {
                        animation: fadeIn 0.5s ease-out forwards;
                    }
                `}
            </style>
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full text-center overflow-hidden transition-shadow duration-300 hover:shadow-indigo-200">
                {/* タイトルセクション */}
                <div className="relative p-10 pb-20 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
                    <div className="relative z-10">
                        <div className="mb-4 float-animation">
                            <Camera size={64} className="mx-auto" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.6)'}}>
                            イロセカ - Photo Contest
                        </h1>
                        <p className="text-indigo-100" style={{textShadow: '1px 1px 4px rgba(0,0,0,0.6)'}}>それぞれの夏、最高の瞬間を、みんなに</p>
                    </div>
                    {/* 波形の区切り */}
                    <div className="absolute bottom-0 left-0 w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                            <path fill="#ffffff" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,186.7C640,192,800,224,960,218.7C1120,213,1280,171,1360,149.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                        </svg>
                    </div>
                </div>

                {/* コンテンツセクション */}
                <div className="p-8">
                    {/* 応募ボタン */}
                    <div className="mb-8">
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScF7-HaNXUCYmE477S0XpZzdfb1F6ggaSCQm8AUCQwicADG9w/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105">
                            <Send size={20} />
                            作品を応募する
                        </a>
                    </div>

                    {/* 募集期間外メッセージ */}
                    <div className="mb-8 p-3 bg-yellow-50 text-yellow-800 text-sm rounded-lg flex items-center justify-center gap-2">
                        <Info size={16} />
                        <p>ただいま募集期間外のため、応募フォームはご利用になれません。</p>
                    </div>

                    {/* タブ切り替えボタン */}
                    <div className="flex justify-center border-b-2 border-gray-200 mb-8">
                        <button onClick={() => setActiveContent('gallery')} className={`px-4 py-2 font-semibold flex items-center gap-2 transition-all duration-300 ${activeContent === 'gallery' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500 hover:text-indigo-500'}`}>
                            <ImageIcon size={18} />ギャラリー
                        </button>
                        <button onClick={() => setActiveContent('overview')} className={`px-4 py-2 font-semibold flex items-center gap-2 transition-all duration-300 ${activeContent === 'overview' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500 hover:text-indigo-500'}`}>
                            <Award size={18} />開催概要
                        </button>
                        <button onClick={() => setActiveContent('rules')} className={`px-4 py-2 font-semibold flex items-center gap-2 transition-all duration-300 ${activeContent === 'rules' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500 hover:text-indigo-500'}`}>
                            <FileText size={18} />応募規約
                        </button>
                    </div>

                    {/* 表示コンテンツ */}
                    <div className="fade-in">
                        {activeContent === 'gallery' && <PhotoGallery />}
                        
                        {activeContent === 'overview' && (
                            <div className="text-left">
                                {/* 賞一覧セクション */}
                                <h3 className="font-bold text-lg text-gray-800 mb-4 text-center"> 賞一覧 </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 flex items-center gap-3">
                                        <Users className="text-blue-500" />
                                        <div>
                                            <p className="font-bold text-blue-800">先生賞</p>
                                            <p className="text-sm text-blue-700">先生方が選ぶ特別な作品</p>
                                        </div>
                                    </div>
                                    <div className="bg-green-50 p-3 rounded-lg border border-green-200 flex items-center gap-3">
                                        <Shield className="text-green-500" />
                                        <div>
                                            <p className="font-bold text-green-800">自治会賞</p>
                                            <p className="text-sm text-green-700">自治会が選ぶユニークな作品</p>
                                        </div>
                                    </div>
                                </div>

                                {/* 開催概要詳細 */}
                                <div className="flex items-start bg-blue-50 rounded-lg p-4 mt-8">
                                    <Info size={20} className="text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                                    <div className="text-sm text-blue-800">
                                        <ul className="space-y-2">
                                            <li><strong>テーマ:</strong> 「夏の思い出」</li>
                                            <li><strong>応募期間:</strong> 2025年9月12日 〜 9月19日</li>
                                            <li><strong>発表期間:</strong> 2025年10月1日 〜 10月7日</li>
                                            <li><strong>先生賞の種類:</strong> 濱砂先生賞、毛利先生賞、柏崎先生賞、山元先生賞、水谷先生賞、半田先生賞</li>
                                            <li><strong>作品展示:</strong> 入賞作品はi-coreにて約1週間プロジェクターを使い投影します。</li>
                                            <li><strong>主催:</strong> 近畿大学情報学部自治会</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeContent === 'rules' && (
                            <div className="text-sm text-gray-700 bg-gray-50 p-4 rounded-xl text-left leading-relaxed space-y-3">
                                <p className="font-bold text-base text-center mb-4">応募規約</p>
                                <p className="pl-4">この参加規約（以下、「本規約」）は、近畿大学情報学部自治会（以下、「主催者」）が主催する写真大会（以下、「本コンテスト」）に関する条件を定めるものです。本コンテストに応募される方（以下、「応募者」）は、本規約の内容をよくお読みいただき、同意の上でご応募ください。なお、本コンテストへの応募をもって、本規約に同意したものとみなします。</p>
                                <p className="font-bold mt-4">第1条（応募資格）</p>
                                <p className="pl-4">本コンテストには、近畿大学の関係者のみが応募できます。</p>
                                <p className="font-bold mt-4">第2条（コンテスト期間）</p>
                                <p className="pl-4">応募期間: 2025年9月12日（金） 〜 2025年9月19日（金）<br></br>結果発表:2025年10月1日（水） 〜 2025年10月7日（火）<br></br>発表場所:i-core,情報学部自治会ウェブサイトにて発表予定です。</p>
                                <p className="font-bold mt-4">第3条（テーマ）</p>
                                <p className="pl-4">このコンテストのテーマは夏の思い出です。テーマに沿った写真を募集します。</p>
                                <p className="font-bold mt-4">第4条（応募作品について）</p>
                                <p className="pl-4">1.応募作品は、応募者本人が撮影し、すべての著作権を有しているオリジナルの作品に限ります。<br></br>2.応募は、1人につき1点までとします。<br></br>3.色調補正やトリミングは可能ですが、過度な合成や加工など、著しく事実と異なる作品は選考の対象外となる場合があります。<br></br>4.公序良俗に反する、または第三者の権利（著作権、肖像権など）を侵害する作品は応募できません。</p>
                                <p className="font-bold mt-4">第5条（応募方法）</p>
                                <p className="pl-4">サイト上部のボタンより指定のGoogleフォームに飛び、必要事項を記入の上、作品データをアップロードしてください。</p>
                                <p className="font-bold mt-4">第6条（審査及び賞）</p>
                                <p className="pl-4">1.応募作品は、主催者が任命する審査員によって厳正に審査されます。<br></br>2.本コンテストで設けている賞は以下の通りです。<br></br>濱砂先生賞 1名<br></br>毛利先生賞 1名<br></br>柏崎先生賞 1名<br></br>山元先生賞 1名<br></br>水谷先生賞 1名<br></br>濱砂先生賞 1名<br></br>自治会賞 1名<br></br>受賞者の作品を情報自治会ウェブ、i-coreにて公開します<br></br>3.本コンテスト受賞者は情報学部自治会ウェブ、i-coreにて作品を公開します</p>
                                <p className="font-bold mt-4">第7条（著作権及び作品の利用）</p>
                                <p className="pl-4">1.応募作品の著作権は、応募者に帰属します。<br></br>2.主催者は、応募作品を本コンテストの広報活動（大学ウェブサイト、公式SNS、学内ポスター、パンフレット等）において、無償で使用する権利を有するものとします。その際、必要に応じてトリミング等の加工を行う場合があります。<br></br>3.作品の利用にあたっては、応募者の氏名や所属学部を表示します。</p>
                                <p className="font-bold mt-4">第8条（肖像権）</p>
                                <p className="pl-4">1.応募作品に個人が特定できる人物が写っている場合、必ずその方の事前の承諾を得てください。<br></br>2.被写体の肖像権に関するトラブルについて、主催者は一切の責任を負いません。</p>
                                <p className="font-bold mt-4">第9条（注意事項・免責事項）</p>
                                <p className="pl-4">本規約は、応募者に事前の通知なく変更される場合があります。</p>
                                <p className="font-bold mt-4">第10条（個人情報の取り扱い）</p>
                                <p className="pl-4">応募時にご提供いただいた個人情報は、本コンテストの運営（応募者への連絡、結果発表など）に必要な範囲でのみ利用します。</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoContestPage;