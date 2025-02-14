import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav className="h-full flex items-center">
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
            </ul>
        </nav>

    )
}

export default Navigation