// @flow
import React from 'react';
import type { Node } from 'react';
import IntroSection from '../../components/IntroSection';
import AboutMeSection from '../../components/AboutMeSection';
import AboutProjectSection from '../../components/AboutProjectSection';
import ContactSection from '../../components/ContactSection';
import DisplayBackground from '../../components/DisplayBackground';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './HomePage.scss';

const HomePage = (): Node => (
    <div className="HomePage">
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
