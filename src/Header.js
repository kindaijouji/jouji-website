import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="bg-gray-800 text-white px-6 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">
                    <Link to="/" className="hover:text-gray-300 transition-colors">
                        近畿大学情報学部自治会
                    </Link>
                </div>
                <Navigation />
            </div>
        </header>
    )
}

export default Header