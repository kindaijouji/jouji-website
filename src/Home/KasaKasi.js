import { Calendar, MapPin} from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function KasaKasi() {
  const navigate = useNavigate();
  
  //ComingSoonへと飛ばす関数
  const handleButtonClick = () => {
    navigate('/coming-soon');
  };

  return (
    <div className="grid gap-6 sm:gap-8">
      {/* 傘貸し */}
      <div className="border border-black rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">傘の貸し出し</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              雨天時の傘の貸し出しを自治会室とロビーで行なっております。<br/>
              <span className="text-red-600 font-medium">ロビーで傘を借りる時と返す際</span>
              は学生証のタッチをお忘れなくお願いします。
            </p>
            <div className="space-y-3 mb-5 sm:mb-6">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="ml-3">
                  <p className="text-gray-900 font-medium text-sm">貸し出し場所</p>
                  <p className="text-gray-600 text-sm sm:text-base">情報学部自治会室（E館1階）<br/>E館1階ロビー</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="ml-3">
                  <p className="text-gray-900 font-medium text-sm">貸し出し期間</p>
                  <p className="text-gray-600 text-sm sm:text-base">土日を除き貸し出し日から3日間</p>
                </div>
              </div>
            </div>

            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg inline-flex items-center text-sm sm:text-base"
              onClick={handleButtonClick}>
              詳細はこちら
            </button>

          </div>
          <div className="mt-4 md:mt-0 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/img/Kasakasi.png"
              alt="傘の貸し出しサービス"
              className="w-full h-auto max-h-64 object-contain mx-auto p-2 bg-blue-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KasaKasi;
