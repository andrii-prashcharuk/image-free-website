// @flow
import React from 'react';
import IntroSection from '../../components/IntroSection';
import AboutMeSection from '../../components/AboutMeSection';
import AboutProjectSection from '../../components/AboutProjectSection';
import ContactSection from '../../components/ContactSection';
import DisplayBackground from '../../components/DisplayBackground';
import './HomePage.scss';

const HomePage = () => (
    <div className="HomePage">
        <IntroSection />
        <AboutMeSection />
        <AboutProjectSection />
        <ContactSection />
        <DisplayBackground />
    </div>
);

export default HomePage;
