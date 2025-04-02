import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MianVisual from './MianVisual';
import Mission from './Mission';
import ActivityResults from './ActivityResults';
import AnnualEventSchedule from './AnnualEventSchedule';
import ListOfPastEvents from './ListOfPastEvents';

const About = () => {
    const location = useLocation();
    const mianVisualRef = useRef(null);
    const annualEventRef = useRef(null);
    const pastEventsRef = useRef(null);
    // footerのリンクを正しく飛べすための関数
    useEffect(() => {
        if (location.hash === '#past-events' && pastEventsRef.current) {
            pastEventsRef.current.scrollIntoView();
        } else if (location.hash === '#annual-event' && annualEventRef.current) {
            annualEventRef.current.scrollIntoView();
        } else if (location.hash === '#main-visual' && mianVisualRef.current) {
            mianVisualRef.current.scrollIntoView();
        }
    }, [location.hash]);

    return (
        <div className="min-h-screen pt-16">
            {/* メインビジュアル */}
            <div ref={mianVisualRef} id="main-visual">
                <MianVisual />
            </div>

            {/* ミッション */}
            <Mission />

            {/* 活動実績 */}
            <ActivityResults />

            {/* 年間行事予定（月ごと） */}
            <div ref={annualEventRef} id="annual-event">
                <AnnualEventSchedule />
            </div>

            {/* 過去のイベント一覧 */}
            <div ref={pastEventsRef} id="past-events">
                <ListOfPastEvents />
            </div>
        </div>
    );
};

export default About;