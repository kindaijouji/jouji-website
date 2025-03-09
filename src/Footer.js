import React from 'react';
import FooterInfo from './FooterInfo';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 md:py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* 左側のコンポーネント 組織の情報 */}
          <FooterInfo />
          
          {/* 右側のコンポーネント リンクたち */}
          <FooterLinks />
        </div>

        {/* Copyright */}
        <div className="mt-4 pt-3 border-t border-gray-600">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 近畿大学情報学部自治会. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;