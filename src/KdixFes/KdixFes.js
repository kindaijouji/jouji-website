import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import KdixFesHeroSection from './KdixFesHeroSection';
import KdixFesInfo from './KdixFesInfo';
import Kdixfes2025 from './Kdixfes2025';
import KdixFesPastInfo from './KdixFesPastInfo';

const KdixFes = () => {
    const location = useLocation();
    const kdixfesinfoRef = useRef(null);
    const pastfesRef = useRef(null);

    useEffect(() => {
        if (location.hash === '#fes-info' && kdixfesinfoRef.current) {
            kdixfesinfoRef.current.scrollIntoView();
        } else if (location.hash === '#past-fes' && pastfesRef.current) {
            pastfesRef.current.scrollIntoView();
        } 
    }, []);

    return (
        <div className="min-h-screen pt-16">
            {/* ヒーローセクション */}
            <KdixFesHeroSection />

            {/* 情報学部祭とは */}
            <div ref={kdixfesinfoRef} id="fes-info">
                <KdixFesInfo />
            </div>

            {/* 2025年度開催情報 */}
            <Kdixfes2025 />

            {/* 過去の開催実績 */}
            <div ref={pastfesRef} id="past-fes">
                <KdixFesPastInfo />
            </div>
        </div>
    );
};

export default KdixFes;