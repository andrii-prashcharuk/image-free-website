// @flow
import React from 'react';
import Section from '../Section';
import FakePopup from '../FakePopup';
import Character from '../Character';
import Logo from '../Logo';
import { getYearsOfExperience } from '../../utils';
import './AboutMeSection.scss';

const experience = getYearsOfExperience();

const AboutMeSection = () => (
    <Section id="about-me" className="AboutMeSection">
        <FakePopup header="Hi there!">
            <Logo />
            <p>
                I&apos;m a Professional Software Engineer from Ukraine with more than&nbsp;
                {experience}
                &nbsp;years of experience in Front-End development.
                Adaptable, self-starter and reliable.
                <br />
                <br />
                I’ve got a lot of practical experience with a number of modern technologies and
                tools (ES2015+, React, Redux, Flow, HTML5, and CSS3).
            </p>
        </FakePopup>
        <Character />
    </Section>
);

export default AboutMeSection;
