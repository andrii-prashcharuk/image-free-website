import React from 'react';
import Section from '../Section';
import Chevron from '../Chevron';
import './IntroSection.scss';

const IntroSection = (): JSX.Element => (
    <Section id="intro" className="IntroSection">
        <h3>Welcome</h3>
        <p>
            My name is Andrii Prashcharuk and this is my personal website!
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
