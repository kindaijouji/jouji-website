import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Organization Info */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">近畿大学情報学部</h3>
                        <p className="text-gray-300 mb-2">
                            〒577-8502<br />
                            大阪府東大阪市小若江３丁目４−１
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">クイックリンク</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    情報学部自治会とは
                                </Link>
                            </li>
                            <li>
                                <Link to="/qabox" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    質問箱
                                </Link>
                            </li>
                            <li>
                                <Link to="/kdixfes" className="text-gray-300 hover:text-white transition-colors duration-200">
                                    情報学部祭とは
                                </Link>
                            </li>
                            <li>
                                <Link to="/coming-soon" className="hover:text-gray-300 transition-colors">
                                    ComingSoon
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <ul className="space-y-2">
                            <li className="text-gray-300">
                                <a href="https://x.com/kindai_jouji" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                                    X: @kindai_jouji
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} 近畿大学情報学部自治会.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer