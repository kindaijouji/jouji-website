import React from 'react';
import { ArrowRight } from 'lucide-react';

const HomeCurrentEvent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">開催中のイベント</h2>
        <div className="border border-black p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-black text-white px-4 py-1 text-sm mb-4">
                参加者募集中
              </span>
              <h3 className="text-2xl font-bold mb-4">春の交流会 2025</h3>
              <p className="text-gray-600 mb-6">
                新入生の皆さん、大学生活には慣れましたか？
                先輩たちと交流しながら、大学生活のアドバイスをもらいましょう！
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-gray-600">
                  <span className="w-24">日時</span>
                  <span>2025年4月15日（月）15:00～17:00</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-24">場所</span>
                  <span>情報学部棟 1階ラウンジ</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="w-24">対象</span>
                  <span>情報学部1年生</span>
                </li>
              </ul>
              <button className="bg-black text-white px-6 py-3 rounded-none inline-flex items-center group hover:bg-gray-800 transition-all">
                参加申し込み
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="bg-gray-100 h-64"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCurrentEvent;