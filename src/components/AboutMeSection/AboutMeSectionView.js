// @flow
import React from 'react';
import Section from '../Section';
import FakePopup from '../FakePopup';
import Character from '../Character';
import './AboutMeSection.scss';

const TEXT = 'A Professional Software Engineer with more than 7 years of experience in Front-End development. Innovative, self-starter and reliable. I’ve got a lot of practical experience with a number of modern technologies and tools (e.g. ES2017, React, Typescript, Backbone, HTML5, CSS3 etc.).';

const AboutMeSection = () => (
    <Section id="about-me" className="AboutMeSection">
        <FakePopup header="About Me">{TEXT}</FakePopup>
        <Character />
    </Section>
);

export default AboutMeSection;
