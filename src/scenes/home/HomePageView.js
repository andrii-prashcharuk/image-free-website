// @flow
import React from 'react';
import IntroSection from '../../components/IntroSection';
import AboutMeSection from '../../components/AboutMeSection';
import AboutProjectSection from '../../components/AboutProjectSection';
import ContactSection from '../../components/ContactSection';

const HomePage = () => (
    <div className="HomePage">
        <IntroSection />
        <AboutMeSection />
        <AboutProjectSection />
        <ContactSection />
    </div>
);

export default HomePage;
