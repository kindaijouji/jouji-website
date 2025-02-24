import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold tracking-wider mb-4">
                            情報学部自治会
                        </h2>
                        <div className="flex space-x-4">
                            <a href="https://kindaijouji.com" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://kindaijouji.com" className="text-gray-400 hover:text-white transition-colors">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex space-x-16">
                        <div>
                            <h3 className="text-sm font-bold tracking-wider mb-4">ABOUT</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="hover:text-white transition-colors cursor-pointer">自治会について</li>
                                <li className="hover:text-white transition-colors cursor-pointer">年間予定</li>
                                <li className="hover:text-white transition-colors cursor-pointer">過去のお知らせ</li>
                                <li className="hover:text-white transition-colors cursor-pointer">過去イベント一覧</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold tracking-wider mb-4">情報学部祭</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="hover:text-white transition-colors cursor-pointer">情報学部祭とは</li>
                                <li className="hover:text-white transition-colors cursor-pointer">過去の企画</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-bold tracking-wider mb-4">質問箱</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li className="hover:text-white transition-colors cursor-pointer">質問フォーム</li>
                                <li className="hover:text-white transition-colors cursor-pointer">質問と回答</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                    <p className="text-sm text-gray-400">
                        &copy; 2025 近畿大学情報学部自治会. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer