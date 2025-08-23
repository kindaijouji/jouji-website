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
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {imagesToShow.map((src, index) => (
                    <div key={index} className="h-56 md:h-64 overflow-hidden rounded-lg shadow-md group bg-gray-100 flex items-center justify-center p-2">
                        <img 
                            src={src} 
                            alt={`サンプル作品 ${index + 1}`}
                            className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x300/cccccc/ffffff?text=Error'; }}
                        />
                    </div>
                ))}
            </div>
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

// --- メインのコンポーネント (修正済み) ---
function PhotoContestPage() {
    const [activeContent, setActiveContent] = useState('gallery');
    const canvasRef = useRef(null);
    
    // --- 変更点 1: 募集期間内かを判定するstateを追加 ---
    const [isAccepting, setIsAccepting] = useState(false);

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

    // --- 変更点 2: JSTで募集期間を判定するロジックを追加 ---
    useEffect(() => {
        const checkSubmissionPeriod = () => {
            const now = new Date();
            // JST（UTC+9）での期間を設定
            const startDate = new Date('2025-09-12T00:00:00+09:00');
            const endDate = new Date('2025-09-19T23:59:59+09:00');

            if (now >= startDate && now <= endDate) {
                setIsAccepting(true);
            } else {
                setIsAccepting(false);
            }
        };

        checkSubmissionPeriod();
    }, []); // ページ読み込み時に一度だけ実行


    return (
        <div className="min-h-screen flex justify-center bg-gradient-to-br from-purple-100 via-indigo-100 to-blue-100 p-4 pt-32 pb-20">
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
                    {/* --- 変更点 3: 応募ボタンのスタイルと動作を動的に変更 --- */}
                    <div className="mb-8">
                        <a 
                           href={isAccepting ? "https://docs.google.com/forms/d/e/1FAIpQLScF7-HaNXUCYmE477S0XpZzdfb1F6ggaSCQm8AUCQwicADG9w/viewform?usp=header" : undefined}
                           target="_blank" 
                           rel="noopener noreferrer" 
                           // isAccepting の値に応じてスタイルを切り替え
                           className={`inline-flex items-center gap-2 font-bold py-3 px-8 rounded-full shadow-lg transition-all transform ${
                               isAccepting
                                   ? 'bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-105'
                                   : 'bg-gray-400 text-gray-100 cursor-not-allowed'
                           }`}
                           // isAccepting が false の場合はクリックイベントを無効化
                           onClick={(e) => !isAccepting && e.preventDefault()}
                           aria-disabled={!isAccepting}
                           role="button"
                        >
                            <Send size={20} />
                            {/* isAccepting の値に応じてボタンのテキストを切り替え */}
                            {isAccepting ? '作品を応募する' : '募集期間外'}
                        </a>
                    </div>

                    {/* --- 変更点 4: 募集期間外メッセージを条件付きで表示 --- */}
                    {!isAccepting && (
                        <div className="mb-8 p-3 bg-yellow-50 text-yellow-800 text-sm rounded-lg flex items-center justify-center gap-2">
                            <Info size={16} />
                            <p>ただいま募集期間外のため、応募フォームはご利用になれません。</p>
                        </div>
                    )}

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

                    {/* 表示コンテンツ (省略) */}
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
                                {/* 規約内容は変更なしのため省略 */}
                                <p className="font-bold text-base text-center mb-4">応募規約</p>
                                <p className="pl-4">この応募規約（以下、「本規約」といいます。）は、近畿大学情報学部自治会（以下、「主催者」といいます。）が主催する写真コンテスト（以下、「本コンテスト」といいます。）に関する応募条件を定めるものです。本コンテストに応募する者（以下、「応募者」といいます。）は、本規約の全ての条項に同意の上、応募するものとします。なお、本コンテストへの応募が完了した時点で、応募者は本規約の内容に同意したものとみなします。</p>
                                <p className="font-bold mt-4">第1条（応募資格）</p>
                                <p className="pl-4">本コンテストに応募できる者は、近畿大学の学生、教職員、その他主催者が別途定める大学関係者に限るものとします。</p>
                                
                                <p className="font-bold mt-4">第2条（コンテストの期間及び場所）</p>
                                <p className="pl-4">本コンテストの期間及び場所は、以下のとおりとします。<br/>応募期間: 2025年9月12日（金）から2025年9月19日（金）まで<br/>結果発表期間: 2025年10月1日（水）から2025年10月7日（火）まで<br/>発表場所: i-CORE 及び 情報学部自治会Webサイト</p>
                                
                                <p className="font-bold mt-4">第3条（テーマ）</p>
                                <p className="pl-4">本コンテストのテーマは「夏の思い出」とします。応募者は、当該テーマに沿った作品を応募するものとします。</p>
                                
                                <p className="font-bold mt-4">第4条（応募作品）</p>
                                <p className="pl-4">1.応募作品は、応募者本人が撮影し、かつ、当該作品に関する一切の著作権を正当に有する、未公表のオリジナル作品に限るものとします。</p>
                                <p className="pl-4">2.応募は、応募者1名につき1作品までとします。</p>
                                <p className="pl-4">3.応募作品の色調補正、トリミングは可能としますが、著しい加工（合成、変形等）が施され、写真の真正性を損なうと主催者が判断した作品は、審査の対象外となることがあります。</p>
                                <p className="pl-4">4.生成AI（画像生成AIを含みますが、これに限りません。）を用いて自動生成された画像は、応募の対象外とします。</p>
                                
                                <p className="font-bold mt-4">第5条（応募方法）</p>
                                <p className="pl-4">応募者は、情報学部自治会Webサイト上の応募フォームにアクセスし、所定の事項（ペンネームを含みます。）を記入の上、作品データをアップロードすることにより応募するものとします。</p>
                                
                                <p className="font-bold mt-4">第6条（審査及び賞）</p>
                                <p className="pl-4">1.応募作品は、主催者が任命する審査員により、厳正に審査されます。</p>
                                <p className="pl-4">2.本コンテストに設ける賞は、以下のとおりとします。<br/>濱砂先生賞 1名<br/>毛利先生賞 1名<br/>柏崎先生賞 1名<br/>山元先生賞 1名<br/>水谷先生賞 1名<br/>自治会賞 1名</p>
                                <p className="pl-4">3.受賞作品及び応募者が届け出たペンネームは、第2条第3項に定める場所において公表します。</p>
                                
                                <p className="font-bold mt-4">第7条（権利の帰属及び利用許諾）</p>
                                <p className="pl-4">1.応募作品の著作権は、応募者に帰属するものとします。</p>
                                <p className="pl-4">2.応募者は、主催者に対し、応募作品を本コンテストの広報、記録、その他関連活動の目的で、情報学部自治会Webサイト、SNS、学内施設での展示において、無償かつ非独占的に使用（複製及び展示を含みます。）する権利を許諾するものとします。</p>
                                <p className="pl-4">3.主催者は、前項に定める使用にあたり、応募者の承諾を得ることなく、応募作品のトリミングを行うことができるものとします。</p>
                                <p className="pl-4">4.主催者は、応募作品の利用にあたり、応募者が届け出たペンネームを表示することができるものとします。</p>

                                <p className="font-bold mt-4">第8条（表明保証）</p>
                                <p className="pl-4">応募者は、主催者に対し、応募作品が第三者の著作権、肖像権、プライバシー権、パブリシティ権その他一切の権利を侵害しないことを表明し、保証するものとします。</p>

                                <p className="font-bold mt-4">第9条（肖像権等）</p>
                                <p className="pl-4">1.応募作品に、応募者以外の人物が含まれる場合、応募者は、当該人物から、本コンテストへの応募及び第7条に定める作品の利用について、事前の許諾を得るものとします。</p>
                                <p className="pl-4">2.応募作品に関し、第三者との間で権利侵害その他の問題が生じた場合、主催者は一切の責任を負わず、応募者自身の責任と費用負担においてこれを解決するものとします。</p>

                                <p className="font-bold mt-4">第10条（禁止事項）</p>
                                <p className="pl-4">応募者は、本コンテストへの応募にあたり、以下の各号に該当する行為またはそのおそれのある行為をしてはなりません。</p>
                                <ul className="list-decimal list-inside pl-8 space-y-1">
                                    <li>法令または公序良俗に違反する行為</li>
                                    <li>本コンテストの運営を妨げる行為</li>
                                    <li>虚偽の内容で応募する行為</li>
                                    <li>その他、主催者が不適切と判断する行為</li>
                                </ul>

                                <p className="font-bold mt-4">第11条（免責事項）</p>
                                <p className="pl-4">1.主催者は、通信機器、通信回線、コンピュータ等の障害、または天災地変その他やむを得ない事由により、本コンテストの全部または一部を中断または中止することができるものとします。</p>
                                <p className="pl-4">2.主催者は、本コンテストへの応募または応募できなかったことによって応募者に生じたいかなる損害についても、主催者の故意または重過失による場合を除き、一切の責任を負わないものとします。</p>

                                <p className="font-bold mt-4">第12条（個人情報の取扱い）</p>
                                <p className="pl-4">主催者は、応募者から提供された個人情報を、本コンテストの運営（応募者への連絡、審査、結果発表、問い合わせ対応等）に必要な範囲でのみ利用し、個人情報の保護に関する法律その他関連法令を遵守し、適切に取り扱うものとします。</p>

                                <p className="font-bold mt-4">第13条（規約の変更）</p>
                                <p className="pl-4">主催者は、必要と判断した場合、応募者への事前の通知なく本規約を変更できるものとします。本規約の変更後、応募者が本コンテストへの応募を継続した場合は、変更後の規約に同意したものとみなします。</p>

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoContestPage;