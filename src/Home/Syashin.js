import { Calendar} from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Syashin() {
  const navigate = useNavigate();
  
  //ComingSoonへと飛ばす関数
  const handleButtonClick = () => {
    navigate('/coming-soon'); //TODO
  };

  return (
    <div className="grid gap-6 sm:gap-8">
      {/* 写真大会 */}
      <div className="border border-black rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">イロセカ　〜情報学部写真大会〜</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              夏休みの思い出の写真を共有しませんか？<br/>
              応募フォームから写真を提出するだけで参加できます！<br/>
              情報学部の先生方から賞も貰えるかも…！？
            </p>
            <div className="space-y-3 mb-5 sm:mb-6">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="ml-3">
                  <p className="text-gray-900 font-medium text-sm">イベント期間</p>
                  <p className="text-gray-600 text-sm sm:text-base">募集期間：9月12日〜9月19日</p>
                  <p className="text-gray-600 text-sm sm:text-base">発表期間：10月1日〜10月7日</p>
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
              src="/img/iroseka.png"
              alt="イロセカ"
              className="w-full h-auto max-h-64 object-contain mx-auto p-2 bg-blue-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Syashin;
