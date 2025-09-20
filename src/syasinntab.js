import React, { useState, useEffect } from 'react';
import { Camera, Info, ChevronDown, ChevronUp, Image as ImageIcon, FileText, Award, Users, Shield, Send, X } from 'lucide-react';

// --- サンプルのギャラリーコンポーネント ---
// This component displays a grid of sample photos.
// It includes a button to expand or collapse the gallery and a modal to view images.
function PhotoGallery() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null); // State to track the selected image for the modal

    // Array of sample image paths.
    const sampleImages = [
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
        "/Picture/1_3の純情な分譲.jpg",
        "/Picture/7屋敷.jpg",
        "/Picture/うっかり呑ん兵衛.jpeg",
        "/Picture/じょん.jpeg",
        "/Picture/チコぴ.jpg",
        "/Picture/つきのわぐま.jpeg",
        "/Picture/ろ.jpg",
        "/Picture/わらびもち.jpeg",
        "/Picture/わわ.jpeg",
        "/Picture/愛をこめて札束を.jpg",
        "/Picture/割とギリギリス.jpeg",
        "/Picture/生意気なだてまき.jpeg",
        "/Picture/76.jpeg",
        "/Picture/kk.jpeg",
        "/Picture/VAN.jpg",
        "/Picture/イッヌ.jpg",
        "/Picture/えぼ.jpeg",
        "/Picture/おちゃ.jpg",
        "/Picture/カスミソウ.jpeg",
        "/Picture/ガムシロップ.jpg",
        "/Picture/かめ.jpeg",
        "/Picture/ぎこ.jpeg",
        "/Picture/けけけ.jpg",
        "/Picture/コミャク.jpeg",
        "/Picture/だわゆ.jpg",
        "/Picture/つゆ.png",
        "/Picture/のこのこ.jpeg",
        "/Picture/はる☘️.jpg",
        "/Picture/ゆうり.jpg",
        "/Picture/祝ってくれ.jpg",
        "/Picture/梅田.jpeg",
        "/Picture/名刀ぽこぽこ丸.jpg",
        "/Picture/夜凪.jpeg",
    ];
    // Toggles the expanded state of the gallery.
    const toggleGallery = () => setIsExpanded(prev => !prev);
    // Determines which images to show based on the expanded state.
    const imagesToShow = isExpanded ? sampleImages : sampleImages.slice(0, 4);

    return (
        <div className="mx-auto">
            {/* The number of columns now adjusts based on screen width for better responsiveness. */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {imagesToShow.map((src, index) => (
                    <div 
                        key={index} 
                        className="overflow-hidden rounded-xl shadow-lg group flex items-center justify-center bg-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200/50 hover:-translate-y-2 cursor-pointer"
                        onClick={() => setSelectedImage(src)} // Set the selected image on click
                    >
                        <img 
                            src={src} 
                            alt={`サンプル作品 ${index + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            // Fallback image in case the original fails to load.
                            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/400x300/e2e8f0/4a5568?text=Image+Not+Found'; }}
                        />
                    </div>
                ))}
            </div>
            <div className="mt-12 text-center">
                <button
                    onClick={toggleGallery}
                    className="flex items-center mx-auto px-8 py-3 rounded-full font-semibold transition bg-gray-800 text-white hover:bg-gray-900 shadow-md"
                >
                    {isExpanded ? '一部を隠す' : 'すべての作品を見る'}
                    {isExpanded ? <ChevronUp size={20} className="ml-2" /> : <ChevronDown size={20} className="ml-2" />}
                </button>
            </div>

            {/* Modal for displaying the selected image */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 transition-opacity duration-300"
                    onClick={() => setSelectedImage(null)} // Click background to close
                >
                    <img 
                        src={selectedImage} 
                        alt="拡大表示" 
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking the image itself
                    />
                     <button 
                        className="absolute top-5 right-5 text-white hover:text-gray-300 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X size={32} />
                    </button>
                </div>
            )}
        </div>
    );
}

// --- メインのコンポーネント (最終デザイン案) ---
// This is the main component for the photo contest page.
// It manages the active tab and checks the submission period.
function App() {
    const [activeContent, setActiveContent] = useState('gallery');
    const [isAccepting, setIsAccepting] = useState(false);
    
    // Effect to check if the current date is within the submission period.
    useEffect(() => {
        const checkSubmissionPeriod = () => {
            const now = new Date();

            // Define the start and end dates for submissions in JST.
            const startDate = new Date('2025-09-12T00:00:00+09:00');
            const endDate = new Date('2025-09-19T23:59:59+09:00');
            setIsAccepting(now >= startDate && now <= endDate);
        };
        checkSubmissionPeriod();
    }, []);

    // Helper function to generate class names for tabs based on active state.
    const getTabClassName = (contentName) => {
        return `flex items-center justify-center gap-2 px-3 py-3 font-bold transition-all duration-300 ${
            activeContent === contentName 
                ? 'text-indigo-600 border-b-2 border-indigo-600' 
                : 'text-gray-500 hover:text-indigo-600'
        }`;
    };

    return (
        <div className="min-h-screen bg-white text-gray-800 selection:bg-pink-200/50 font-sans">
            <style>
                {`
                    /* Floating animation for the header icon */
                    @keyframes float {
                        0% { transform: translateY(0px); }
                        50% { transform: translateY(-12px); }
                        100% { transform: translateY(0px); }
                    }
                    .float-animation {
                        animation: float 5s ease-in-out infinite;
                    }
                    /* Fade-in animation for content sections */
                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .fade-in {
                        animation: fadeIn 0.8s ease-out forwards;
                    }
                    /* Speech bubble animation */
                    @keyframes bounce-in {
                        0% { transform: scale(0) rotate(10deg); opacity: 0; }
                        60% { transform: scale(1.1) rotate(5deg); opacity: 1; }
                        100% { transform: scale(1) rotate(12deg); opacity: 1; }
                    }
                    .bubble-animation {
                        animation: bounce-in 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s forwards;
                        opacity: 0; /* Start hidden */
                    }
                    /* Speech bubble tail */
                    .speech-bubble::after {
                        content: '';
                        position: absolute;
                        bottom: -8px; /* Position it at the bottom */
                        left: 20px; /* Position it horizontally */
                        width: 16px;
                        height: 16px;
                        background-color: #ec4899; /* Same as bg-pink-500 */
                        transform: rotate(45deg);
                        z-index: -1;
                    }
                `}
            </style>

            {/* Header Section */}
            <header className="relative w-full text-center pt-24 pb-6 sm:pt-32 sm:pb-8">
                 <div className="relative z-10 px-4">
                    <div className="mb-6 float-animation text-pink-500">
                        <Camera size={72} className="mx-auto drop-shadow-lg" strokeWidth={1.5}/>
                    </div>
                    {/* Title container for positioning the speech bubble */}
                    <div className="relative inline-block mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-3">
                            イロセカ - Photo Contest
                        </h1>

                        {/* Speech Bubble - Moved to the left */}
                        <div className="absolute -top-10 sm:-top-8 -right-8 sm:-right-16 transform rotate-12 bubble-animation">
                            <div className="speech-bubble relative bg-pink-500 text-white text-sm sm:text-base font-bold py-2 px-4 rounded-lg shadow-lg">
                            先生賞もあるよ！
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 text-lg">
                        それぞれの夏、最高の瞬間を、みんなに
                    </p>
                </div>
            </header>

            {/* Content Section */}
            <main className="px-4 pb-4 md:px-8 md:pb-8 max-w-5xl mx-auto">

                {/* Conditional Notice Area */}
                <div className="mb-12">
                    {!isAccepting ? (
                        <div className="p-4 bg-pink-50 text-pink-800 border-2 border-pink-200 border-dashed rounded-xl flex items-center justify-center gap-3 text-center shadow-lg shadow-pink-100/50">
                            <Info size={20} className="flex-shrink-0 text-pink-500"/>
                            <p className="font-semibold">たくさんのご応募、本当にありがとうございました！<br></br> 現在は選定期間ですので、結果発表までお待ちください！
                            </p>
                        </div>
                    ) : (
                        <div className="p-4 bg-blue-100 text-blue-800 border border-blue-200 rounded-xl flex items-center justify-center gap-3 text-center">
                            <Info size={20} className="flex-shrink-0"/>
                            <p className="font-semibold">応募は１人１作品までです。</p>
                        </div>
                    )}
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-12 space-x-4 sm:space-x-8 border-b border-gray-200">
                    <button onClick={() => setActiveContent('gallery')} className={getTabClassName('gallery')}>
                        <ImageIcon size={18} /> ギャラリー
                    </button>
                    <button onClick={() => setActiveContent('overview')} className={getTabClassName('overview')}>
                        <Award size={18} /> 開催概要
                    </button>
                    <button onClick={() => setActiveContent('rules')} className={getTabClassName('rules')}>
                       <FileText size={18} /> 応募規約
                    </button>
                </div>

                {/* Displayed Content based on active tab */}
                <div className="fade-in">
                    {activeContent === 'gallery' && <PhotoGallery />}
                    
                    {activeContent === 'overview' && (
                        <div className="text-left space-y-10 p-4">
                            <h2 className="font-bold text-3xl text-center text-gray-900">開催概要</h2>

                            
                            <div className="text-center text-gray-700 leading-relaxed space-y-4">
                                <p>情報学部自治会によるフォトコンテストを開催します！</p>
                                <p>テーマは「夏の思い出」。夏休みに撮った写真をウェブサイトの応募フォームから投稿してください！</p>
                                <p>集まった写真の中から、先生方が選ぶ<strong>先生賞</strong>と、自治会が選ぶ<strong>自治会賞</strong>を決定します。受賞作品は情報学部自治会Webサイトで発表されるほか、i-COREにてプロジェクターを使い投影します。</p>
                                <p className="font-semibold">みなさんの夏を彩る一枚をお待ちしています！</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 sm:gap-8 text-center">
                                <div className="space-y-3 p-6 bg-gray-50 rounded-lg">
                                    <Users className="text-indigo-500 mx-auto" size={40} />
                                    <p className="font-bold text-xl text-gray-900">先生賞</p>
                                    <p className="text-gray-600">先生方が選ぶ特別な作品</p>
                                </div>
                                <div className="space-y-3 p-6 bg-gray-50 rounded-lg">
                                    <Shield className="text-indigo-500 mx-auto" size={40} />
                                    <p className="font-bold text-xl text-gray-900">自治会賞</p>
                                    <p className="text-gray-600">自治会が選ぶユニークな作品</p>
                                </div>
                            </div>
                            <div className="flex items-start mt-8 space-x-4 p-6 bg-gray-50 rounded-lg">
                                <Info size={28} className="text-indigo-500 flex-shrink-0 mt-1" />
                                <div>
                                    <ul className="space-y-3 text-lg text-gray-700">
                                        <li><strong>テーマ:</strong> 「夏の思い出」</li>
                                        <li><strong>応募期間:</strong> <strong className="text-red-600">2025年9月12日 〜 9月19日</strong></li>
                                        <li><strong>発表期間:</strong> <strong className="text-red-600">2025年10月1日 〜 10月7日</strong></li>
                                        <li><strong>先生賞:</strong> 水谷先生賞、半田先生賞、柏崎先生賞、山元先生賞など</li>
                                        <li><strong>作品展示:</strong> 受賞作品は i-COREで約1週間、プロジェクターを使って投影します。さらに、情報学部自治会Webサイトにも掲載され、イベント終了後も「過去の受賞作品」として閲覧できます。</li>
                                        <li><strong>主催:</strong> 近畿大学情報学部自治会</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeContent === 'rules' && (
                        <div className="text-base text-left leading-relaxed space-y-4 p-4 text-gray-700 prose max-w-none">
                            <h2 className="font-bold text-3xl text-center mb-8 text-gray-900">応募規約</h2>
                            <p>この応募規約（以下、「本規約」といいます。）は、近畿大学情報学部自治会（以下、「主催者」といいます。）が主催する写真コンテスト（以下、「本コンテスト」といいます。）に関する応募条件を定めるものです。本コンテストに応募する者（以下、「応募者」といいます。）は、本規約の全ての条項に同意の上、応募するものとします。なお、本コンテストへの応募が完了した時点で、応募者は本規約の内容に同意したものとみなします。</p>
                            <h3 className="font-bold pt-4 text-lg text-gray-900">第1条（応募資格）</h3>
                            <p>本コンテストに応募できる者は、近畿大学の学生、教職員、その他主催者が別途定める大学関係者に限るものとします。</p>
                            <h3 className="font-bold pt-4 text-lg text-gray-900">第2条（コンテストの期間及び場所）</h3>
                            <p>本コンテストの期間及び場所は、以下のとおりとします。<br/>応募期間: 2025年9月12日（金）から2025年9月19日（金）まで<br/>結果発表期間: 2025年10月1日（水）から2025年10月7日（火）まで<br/>発表場所: i-CORE 及び 情報学部自治会Webサイト</p>
                            <h3 className="font-bold pt-4 text-lg text-gray-900">第3条（テーマ）</h3>
                            <p>本コンテストのテーマは「夏の思い出」とします。応募者は、当該テーマに沿った作品を応募するものとします。</p>
                            <h3 className="font-bold pt-4 text-lg text-gray-900">第4条（応募作品）</h3>
                            <p>1.応募作品は、応募者本人が撮影し、かつ、当該作品に関する一切の著作権を正当に有する、未公表のオリジナル作品に限るものとします。</p>
                            <p>2.応募は、応募者1名につき1作品までとします。</p>
                            <p>3.応募作品の色調補正、トリミングは可能としますが、著しい加工（合成、変形等）が施され、写真の真正性を損なうと主催者が判断した作品は、審査の対象外となることがあります。</p>
                            <p>4.生成AI（画像生成AIを含みますが、これに限りません。）を用いて自動生成された画像は、応募の対象外とします。</p>
                            <h3 className="font-bold pt-4 text-lg text-gray-900">第5条（応募方法）</h3>
                            <p>応募者は、情報学部自治会Webサイト上の応募フォームにアクセスし、所定の事項（ペンネームを含みます。）を記入の上、作品データをアップロードすることにより応募するものとします。</p>
                            <h3 className="font-bold pt-4 text-lg text-gray-900">第6条（審査及び賞）</h3>
                            <p>1.応募作品は、主催者が任命する審査員により、厳正に審査されます。</p>
                            <p>2.本コンテストに設ける賞は、以下のとおりとします。<br/><br/>水谷先生賞1名、半田先生賞1名、柏崎先生賞1名、山元先生賞1名、その他先生賞2名、自治会賞 1名</p>
                            <p>3.受賞作品及び応募者が届け出たペンネームは、第2条第3項に定める場所において公表します。</p>
                            <h3 className="font-bold pt-4 text-lg text-gray-900">第7条（権利の帰属及び利用許諾）</h3>
                            <p>1.応募作品の著作権は、応募者に帰属するものとします。</p>
                            <p>2.応募者は、主催者に対し、応募作品を本コンテストの広報、記録、その他関連活動の目的で、情報学部自治会Webサイト、SNS、学内施設での展示において、無償かつ非独占的に使用（複製及び展示を含みます。）する権利を許諾するものとします。</p>
                            <p>3.主催者は、前項に定める使用にあたり、応募者の承諾を得ることなく、応募作品のトリミングを行うことができるものとします。</p>
                            <p>4.主催者は、応募作品の利用にあたり、応募者が届け出たペンネームを表示することができるものとします。</p>
                            <h3 className="font-bold pt-4 text-lg text-gray-900">第8条（表明保証）</h3>
                            <p>応募者は、主催者に対し、応募作品が第三者の著作権、肖像権、プライバシー権、パブリシティ権その他一切の権利を侵害しないことを表明し、保証するものとします。</p>
                            <h3 className="font-bold pt-4 text-lg text-gray-900">第9条（肖像権等）</h3>
                            <p>1.応募作品に、応募者以外の人物が含まれる場合、応募者は、当該人物から、本コンテストへの応募及び第7条に定める作品の利用について、事前の許諾を得るものとします。</p>
                            <p>2.応募作品に関し、第三者との間で権利侵害その他の問題が生じた場合、主催者は一切の責任を負わず、応募者自身の責任と費用負担においてこれを解決するものとします。</p>
                            <h3 className="font-bold pt-4 text-lg text-gray-900">第10条（禁止事項）</h3>
                            <p>応募者は、本コンテストへの応募にあたり、以下の各号に該当する行為またはそのおそれのある行為をしてはなりません。</p>
                            <ul className="list-decimal list-inside pl-4 space-y-2">
                                <li>法令または公序良俗に違反する行為</li>
                                <li>本コンテストの運営を妨げる行為</li>
                                <li>虚偽の内容で応募する行為</li>
                                <li>その他、主催者が不適切と判断する行為</li>
                            </ul>
                            <h3 className="font-bold pt-4 text-lg text-gray-900">第11条（免責事項）</h3>
                            <p>1.主催者は、通信機器、通信回線、コンピュータ等の障害、または天災地変その他やむを得ない事由により、本コンテストの全部または一部を中断または中止することができるものとします。</p>
                            <p>2.主催者は、本コンテストへの応募または応募できなかったことによって応募者に生じたいかなる損害についても、主催者の故意または重過失による場合を除き、一切の責任を負わないものとします。</p>
                            <h3 className="font-bold pt-4 text-lg text-gray-900">第12条（個人情報の取扱い）</h3>
                            <p>主催者は、応募者から提供された個人情報を、本コンテストの運営（応募者への連絡、審査、結果発表、問い合わせ対応等）に必要な範囲でのみ利用し、個人情報の保護に関する法律その他関連法令を遵守し、適切に取り扱うものとします。</p>
                            <h3 className="font-bold pt-4 text-lg text-gray-900">第13条（規約の変更）</h3>
                            <p>主催者は、必要と判断した場合、応募者への事前の通知なく本規約を変更できるものとします。本規約の変更後、応募者が本コンテストへの応募を継続した場合は、変更後の規約に同意したものとみなします。</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;





