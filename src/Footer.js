import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 py-md-5">
            <div className="container">
                <div className="row gy-4">
                    {/* 組織についての情報 */}
                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                        <h2 className="fs-4 fw-bold mb-3">
                            近畿大学情報学部自治会
                        </h2>
                        <p className="fw-bold mb-3">
                            近畿大学東大阪キャンパス
                            <br />
                            E館1階自治会室
                        </p>
                        <div className="d-flex gap-3">
                            <a href="https://twitter.com/kindai_jouji" className="text-secondary hover-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://www.instagram.com/kindai_jouji/" className="text-secondary hover-white">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 2.163c-3.151 0-3.509.014-4.758.069-2.624.12-3.834 1.33-3.955 3.955-.055 1.249-.069 1.607-.069 4.758s.014 3.509.069 4.758c.12 2.621 1.33 3.834 3.955 3.955 1.249.055 1.607.069 4.758.069s3.509-.014 4.758-.069c2.621-.12 3.834-1.33 3.955-3.955.055-1.249.069-1.607.069-4.758s-.014-3.509-.069-4.758c-.12-2.621-1.33-3.834-3.955-3.955-1.249-.055-1.607-.069-4.758-.069zm0 3.678a5.304 5.304 0 110 10.608 5.304 5.304 0 010-10.608zm0 8.75a3.446 3.446 0 110-6.892 3.446 3.446 0 010 6.892zm6.75-8.834a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* それぞれのリンクについて */}
                    <div className="col-12 col-md-8">
                        <div className="row">
                            {/* Aboutのリンク */}
                            <div className="col-12 col-sm-4 mb-3 mb-sm-0">
                                <h3 className="fs-6 fw-bold mb-3">ABOUT</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">自治会について</a></li>
                                    <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">年間予定</a></li>
                                    <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">過去イベント一覧</a></li>
                                </ul>
                            </div>

                            {/* 情報学部祭のリンク */}
                            <div className="col-12 col-sm-4 mb-3 mb-sm-0">
                                <h3 className="fs-6 fw-bold mb-3">情報学部祭</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">情報学部祭とは</a></li>
                                    <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">過去の企画</a></li>
                                </ul>
                            </div>

                            {/* Q&Aのリンク */}
                            <div className="col-12 col-sm-4">
                                <h3 className="fs-6 fw-bold mb-3">質問箱</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">質問フォーム</a></li>
                                    <li className="mb-2"><a href="#" className="text-secondary text-decoration-none">質問と回答</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="row mt-4 pt-3 border-top border-secondary">
                    <div className="col-12 text-center">
                        <p className="text-secondary small">
                            &copy; 2025 近畿大学情報学部自治会. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;