import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative">
            {/* ハンバーガーメニューボタン */}
            <button
                className="block lg:hidden p-2 hover:bg-gray-700 rounded"
                onClick={toggleMenu}
                aria-label="メニュー"
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <Menu className="w-6 h-6" />
                )}
            </button>

            {/* デスクトップメニュー */}
            <nav className="hidden lg:block">
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/about" className="hover:text-gray-300 transition-colors">
                            情報学部自治会とは
                        </Link>
                    </li>
                    <li>
                        <Link to="/qabox" className="hover:text-gray-300 transition-colors">
                            質問箱
                        </Link>
                    </li>
                    <li>
                        <Link to="/kdixfes" className="hover:text-gray-300 transition-colors">
                            情報学部祭とは
                        </Link>
                    </li>
                    <li>
                        <Link to="/coming-soon" className="hover:text-gray-300 transition-colors">
                            ComingSoon
                        </Link>
                    </li>
                    <li>
                        <Link to="/syasinntab" className="hover:text-gray-300 transition-colors">
                            写真大会
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* モバイルメニュー */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-gray-800 rounded-lg shadow-lg lg:hidden">
                    <ul className="py-2">
                        <li>
                            <Link
                                to="/about"
                                className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                                onClick={toggleMenu}
                            >
                                情報学部自治会とは
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/qabox"
                                className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                                onClick={toggleMenu}
                            >
                                質問箱
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/kdixfes"
                                className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                                onClick={toggleMenu}
                            >
                                情報学部祭とは
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/coming-soon"
                                className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                                onClick={toggleMenu}
                            >
                                ComingSoon
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/syasinntab"
                                className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                                onClick={toggleMenu}
                            >
                                写真大会
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Navigation