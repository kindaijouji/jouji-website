import React from 'react';

import KdixFesHeroSection from './KdixFesHeroSection';
import KdixFesInfo from './KdixFesInfo';
import Kdixfes2025 from './Kdixfes2025';
import KdixFesPastInfo from './KdixFesPastInfo';

const KdixFes = () => {
    return (
        <div className="min-h-screen pt-16">
            {/* ヒーローセクション */}
            <KdixFesHeroSection />

            {/* 情報学部祭とは */}
            <KdixFesInfo />

            {/* 2025年度開催情報 */}
            <Kdixfes2025 />

            {/* 過去の開催実績 */}
            <KdixFesPastInfo />
        </div>
    );
};

export default KdixFes;