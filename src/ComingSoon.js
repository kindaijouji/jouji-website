import React from 'react'

function ComingSoon() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 text-center">
                <div className="mb-8">
                    {/* 傘のアイコン */}
                    <div className="text-6xl mb-4">☔</div>
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
                    <p className="text-gray-600">
                        急な雨でも安心して帰宅できるように、
                        <br className="hidden md:block" />
                        みなさんの学生生活をサポートします
                    </p>
                </div>

                <div className="text-gray-500">
                    <p>開始時期・詳細は後日お知らせします</p>
                    <p className="mt-2">お楽しみに！</p>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon