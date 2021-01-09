/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import IntroSection from '../../components/IntroSection';
import AboutMeSection from '../../components/AboutMeSection';
import AboutProjectSection from '../../components/AboutProjectSection';
import ContactSection from '../../components/ContactSection';
import DisplayBackground from '../../components/DisplayBackground';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomePage = (): JSX.Element => (
    <div css={{ overflow: 'hidden' }}>
        <Header />
        <main>
            <IntroSection />
            <AboutMeSection />
            <AboutProjectSection />
            <ContactSection />
            <DisplayBackground />
        </main>
        <Footer />
    </div>
);

export default HomePage;
