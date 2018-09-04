// @flow
import React from 'react';
import Section from '../Section';
import Chevron from '../Chevron';
import './IntroSection.scss';

const IntroSection = () => (
    <Section id="intro" className="IntroSection">
        <h3>Welcome</h3>
        <p>
            To the modern, lightweight and image-free website!
            <br />
            Scroll down to learn more.
        </p>
        <div className="IntroSection-ScrollDown">
            <Chevron />
            <Chevron />
        </div>
    </Section>
);

export default IntroSection;
