import React from 'react';
import { Umbrella, Clock, Users, AlertCircle } from 'lucide-react';

function ComingSoon() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4 pt-16">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 text-center">
                <div className="mb-8">
                    <Umbrella size={64} className="mx-auto text-blue-600" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    傘の貸し出しサービス
                </h1>

                <div className="bg-blue-50 rounded-xl p-6 mb-6">
                    <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full font-semibold mb-4">
                        Coming Soon
                    </span>
                    <p className="text-xl text-gray-700 mb-2">
                        今後、情報学部自治会による傘の貸し出しを開始します
                    </p>
                    <div className="text-gray-500">
                        <p>開始時期・詳細は後日お知らせします</p>
                    </div>
                </div>
                {/* 注意事項 */}
                <div className="mt-8 text-left">
                    <div className="flex items-start bg-yellow-50 rounded-lg p-4">
                        <AlertCircle size={20} className="text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-yellow-700">
                            <span className="font-semibold">注意事項：</span>
                            <ul className="mt-1 space-y-1">
                                <li>・ 学生証の提示が必要です</li>
                                <li>・ 返却期限を必ずお守りください</li>
                                <li>・ 破損・紛失時は情報学部自治会までお知らせください。</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComingSoon;