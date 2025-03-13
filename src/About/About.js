import React from 'react';
import MianVisual from './MianVisual';
import Mission from './Mission';
import ActivityResults from './ActivityResults';
import AnnualEventSchedule from './AnnualEventSchedule';
import ListOfPastEvents from './ListOfPastEvents';

const About = () => {
    return (
        <div className="min-h-screen pt-16">
            {/* メインビジュアル */}
            <MianVisual />

            {/* ミッション */}
            <Mission />

            {/* 活動実績 */}
            <ActivityResults />

            {/* 年間行事予定（月ごと） */}
            <AnnualEventSchedule />

            {/* 過去のイベント一覧 */}
            <ListOfPastEvents />

        </div>
    );
};

export default About;