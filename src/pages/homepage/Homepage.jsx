import React from 'react';
import HomeHeroSection from './HomeHeroSection';
import HomeCardSection from './HomeCardSection';
import HomeLearnFees from './HomeLearnFees';
import HomeInfoReason from './HomeInfoReason';
import HomeFinancial from './HomeFinancial';
import HomeWhyUse from './HomeWhyUse';
import HomeHowSteps from './HomeHowSteps';
function Homepage(props) {
    return (
        <div className='overflow-x-hidden'>
            <HomeHeroSection></HomeHeroSection>
            <HomeCardSection></HomeCardSection>
            <HomeLearnFees></HomeLearnFees>
            <HomeInfoReason></HomeInfoReason>
            <HomeFinancial></HomeFinancial>
            <HomeWhyUse></HomeWhyUse>
            <HomeHowSteps></HomeHowSteps>
        </div>
    );
}

export default Homepage;