import { Calendar, FileText } from 'lucide-react';
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

function GakubuchouKaidan() {
    const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="grid gap-6 sm:gap-8">
      {/* 学部長会談 */}
      <div className="border border-black rounded-lg p-4 sm:p-6 md:p-8 hover:shadow-lg transition-all">
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 items-center">
          {/* 左側：説明 */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">学部長会談</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                学部長会談とは、情報学部生の意見や要望などを大学側に対して直接伝え、
                学生の意見を反映させることを目的として開催される会談です。<br />
                これまでに寄せられた意見から、オンデマンドサロンの騒音問題の改善、
                トイレへの芳香剤の設置など、具体的な改善が実現されています。<br />
                <span className="text-red-600 font-medium">
                    アンケートの回答数が多いほど、学生全体の意見として大学側へ伝える説得力が増します。
                </span><br />
                みなさんの回答が大学を変える第一歩です。積極的なご協力をお願いします！
                </p>


            <div className="space-y-3 mb-5 sm:mb-6">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="ml-3">
                  <p className="text-gray-900 font-medium text-sm">アンケート回答期間</p>
                  <p className="text-gray-600 text-sm sm:text-base">2025年5月26日（月）〜 2025年6月6日（金）23:59まで</p>
                </div>
              </div>
              <div className="flex items-start">
                <FileText className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                <div className="ml-3">
                    <p className="text-gray-900 font-medium text-sm">アンケートフォーム</p>
                    <a
                    href="https://forms.gle/vnw5diQL5SeomsuNA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm sm:text-base mt-1"
                    >
                    アンケートはこちら
                    </a>
                </div>
                </div>
            </div>
          </div>

          {/* 右側：画像スライド（矢印外側） */}
            <div className="mt-4 md:mt-0 flex justify-center">
            <div className="flex items-center justify-center gap-4 h-full min-h-[300px]">
            {/* 左ボタン */}
            <button
                onClick={() => setCurrentIndex((prev) => (prev === 0 ? 3 : prev - 1))}
                className="bg-white p-1 rounded-full shadow hover:bg-gray-100"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>

            {/* 画像本体 */}
            <div className="w-full max-w-3xl aspect-[16/9] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                <img
                src={`/img/gakubuchou-slide-${currentIndex + 1}.png`}
                alt={`学部長会談スライド ${currentIndex + 1}`}
                className="w-full h-full object-contain"
                />
            </div>

            {/* 右ボタン */}
            <button
                onClick={() => setCurrentIndex((prev) => (prev === 3 ? 0 : prev + 1))}
                className="bg-white p-1 rounded-full shadow hover:bg-gray-100"
            >
                <ChevronRight className="w-5 h-5" />
            </button>
            </div>
        </div>

        </div>
      </div>
    </div>
  );
}

export default GakubuchouKaidan;
