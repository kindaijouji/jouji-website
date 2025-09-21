import React, { useState } from 'react';

const UmbrellaLendingCalendar = () => {
  // 選択された日（借りる日）と返却日を管理するstate
    const [selectedDay, setSelectedDay] = useState(null);
    const [returnDay, setReturnDay] = useState(null);

  // 日本語の曜日
    const days = ["月", "火", "水", "木", "金", "土", "日"];

  // 曜日がクリックされたときのハンドラー
    const handleDayClick = (day) => {
    // 選択された日を設定
    setSelectedDay(day);
    
    // 返却日を計算（土日を除く3営業日後）
    const dayIndex = days.indexOf(day);
    let businessDaysCount = 0;
    let currentDayIndex = dayIndex;
    
    for (let i = 1; businessDaysCount < 3; i++) {
      // 次の日のインデックスを計算（週をまたぐ場合は0に戻る）
        currentDayIndex = (dayIndex + i) % 7;
        
      // 土日でない場合のみ営業日としてカウント
      if (currentDayIndex !== 5 && currentDayIndex !== 6) { // 5=土, 6=日
        businessDaysCount++;
        }
    }
    
    setReturnDay(days[currentDayIndex]);
  };
  
  // 曜日のスタイルを取得
  const getDayStyle = (day) => {
    const isWeekend = day === "土" || day === "日";
    const isSelected = day === selectedDay;
    const isReturn = day === returnDay;
    
    let className = "flex flex-col items-center justify-center w-16 h-20 m-1 rounded-lg ";
    
    if (isSelected) {
      className += "bg-blue-500 text-white font-bold ";
    } else if (isReturn) {
      className += "bg-green-500 text-white font-bold ";
    } else {
      className += isWeekend 
        ? "bg-yellow-50 border border-gray-300 hover:bg-blue-100 cursor-pointer " 
        : "bg-white border border-gray-300 hover:bg-blue-100 cursor-pointer ";
    }
    
    return className;
  };
  
  // 借りた日と返す日の間の営業日を取得
  const getLendingDays = () => {
    if (!selectedDay || !returnDay) return [];
    
    const startIdx = days.indexOf(selectedDay);
    const endIdx = days.indexOf(returnDay);
    
    // 曜日のインデックスを整理（週をまたぐ場合）
    let indices = [];
    if (endIdx >= startIdx) {
      for (let i = startIdx; i <= endIdx; i++) {
        indices.push(i);
      }
    } else {
      for (let i = startIdx; i < days.length; i++) {
        indices.push(i);
      }
      for (let i = 0; i <= endIdx; i++) {
        indices.push(i);
      }
    }
    
    // 土日を除外
    return indices.filter(idx => idx !== 5 && idx !== 6).map(idx => days[idx]);
  };
  
  // 貸出期間の日数を計算
  const getLendingDaysCount = () => {
    const lendingDays = getLendingDays();
    return lendingDays.length;
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 w-full text-sm sm:text-base">

      {/* 貸し出し場所 */}
            <h1 className="text-xl sm:text-2xl font-bold mb-6 text-center text-blue-700">貸し出し場所のご案内</h1>

            <section className="bg-white border rounded-lg p-4 sm:p-6 mb-0 mx-auto w-full">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 text-center text-blue-700">ロビー</h2>
            <p className="text-center">ロビーに設置されたカードリーダーに学生証をかざしてください。</p>
            </section>
            <div className="text-base text-blue-700 mt-4 text-center w-full mb-8">
            ※ 傘は<strong>借りた場所へ返却</strong>してください。 <br/>
            </div>

      <h1 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2">傘の貸し出し期間</h1>
      <h2 className="text-lg sm:text-xl text-blue-600 mb-6">営業日3日間（土日を除く）</h2>
      
      <div className="bg-white rounded-lg shadow-md p-4 mb-6 w-full">
        <p className="text-center text-base mb-4">
          借りる曜日をクリックすると、返却する曜日が表示されます
        </p>
        
        {/* カレンダー表示 */}
        <div className="grid grid-cols-4 sm:flex sm:flex-wrap justify-center mb-6">
          {days.map((day, index) => (
            <div 
              key={index} 
              className={getDayStyle(day)}
              onClick={() => handleDayClick(day)}
            >
              <span className="text-base font-semibold">{day}</span>
              {day === selectedDay && <div className="mt-1 text-xs">借りる</div>}
              {day === returnDay && <div className="mt-1 text-xs">返す</div>}
              
            </div>
          ))}
        </div>
        
        {/* 説明 */}
        <div className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mb-4">
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
            <span>借りる日</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
            <span>返す日</span>
          </div>
        </div>
      </div>
      
      {/* 選択結果の表示 */}
      {selectedDay && returnDay && (
        <div className="bg-white rounded-lg shadow-md p-4 w-full">
          <h3 className="text-lg font-bold text-blue-700 mb-3">貸出詳細:</h3>
          
          <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-3 rounded-lg mb-4">
            <div className="flex items-center mb-4 sm:mb-0">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mr-3">
                <span className="text-lg font-bold">{selectedDay}</span>
              </div>
              <div>
                <p className="font-bold">借りる日</p>
                <p className="text-sm text-gray-600">{selectedDay}曜日</p>
              </div>
            </div>
            
            <div className="w-full sm:w-auto flex-1 px-4">
              <div className="border-t-2 border-dashed border-gray-400 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-100 px-2">
                  <span className="font-bold">{getLendingDaysCount()}営業日</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center mt-4 sm:mt-0">
              <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center mr-3">
                <span className="text-lg font-bold">{returnDay}</span>
              </div>
              <div>
                <p className="font-bold">返す日　</p>
                <p className="text-sm text-gray-600">{returnDay}曜日</p>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded text-sm">
            <p className="text-yellow-700">
              <strong>注意:</strong> 土曜日・日曜日は借りることはできますが、貸出日数にはカウントされません。
              例えば、金曜日に借りた場合は水曜日までの貸出（金→[土日]→月→火→水）、
              土曜日に借りた場合も水曜日までの貸出（土→[日]→月→火→水）になります。
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UmbrellaLendingCalendar;