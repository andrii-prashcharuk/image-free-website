// @flow
import React from 'react';
import type { Node } from 'react';
import Section from '../Section';
import FakePopup from '../FakePopup';
import Character from '../Character';
import Logo from '../Logo';
import { getYearsOfExperience } from '../../utils';
import './AboutMeSection.scss';

const experience = getYearsOfExperience();

const AboutMeSection = (): Node => (
    <Section id="about-me" className="AboutMeSection">
        <FakePopup header="Hi there!">
            <Logo />
            <p>
                I’m a Professional Software Engineer from Ukraine with more than&nbsp;
                {experience}
                &nbsp;years of experience in Front-End development.
                <br />
                <br />
                As a Front-end Engineer, I believe software development is a type of modern art and
                I’m interested in using the latest tools and technologies to breathe life into web
                applications, make them animated, responsive, and dynamic.
            </p>
        </FakePopup>
        <Character />
    </Section>
);

export default AboutMeSection;
