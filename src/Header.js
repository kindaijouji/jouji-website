import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'about', name: 'About' },
        { id: 'kdixfes', name: '情報学部祭' },
        { id: 'qabox', name: '質問箱' },
        { id: 'coming-soon', name: '傘の貸し出し' },
        { id: 'syasinntab', name: '写真大会' }
    ];

    return (
        <header className={`fixed w-full z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-200'
            }`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <h1 className="text-xl font-bold tracking-wider text-black hover:text-gray-600 transition-colors">
                            <Link to="/">近畿大学情報学部自治会</Link>
                        </h1>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                className="text-sm tracking-wider transition-colors hover:text-gray-600"
                            >

                                <Link to={item.id}>
                                    {item.name}
                                </Link>
                            </button>
                        ))}
                    </nav>

                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <nav className="px-4 py-2">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                className="flex items-center w-full py-3 text-sm text-gray-600 hover:text-gray-900"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <Link to={item.id}>
                                    {item.name}
                                </Link>
                            </button>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header