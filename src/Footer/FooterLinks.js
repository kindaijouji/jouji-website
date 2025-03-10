import React from 'react';

const FooterLinks = () => {
  return (
    <div className="w-full md:w-2/3">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Aboutのリンク */}
        <div>
          <h3 className="text-sm font-bold mb-3">ABOUT</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white no-underline transition-colors">自治会について</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white no-underline transition-colors">年間予定</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white no-underline transition-colors">過去イベント一覧</a></li>
          </ul>
        </div>

        {/* 情報学部祭のリンク */}
        <div>
          <h3 className="text-sm font-bold mb-3">情報学部祭</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white no-underline transition-colors">情報学部祭とは</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white no-underline transition-colors">過去の企画</a></li>
          </ul>
        </div>

        {/* Q&Aのリンク */}
        <div>
          <h3 className="text-sm font-bold mb-3">質問箱</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white no-underline transition-colors">質問フォーム</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white no-underline transition-colors">質問と回答</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;