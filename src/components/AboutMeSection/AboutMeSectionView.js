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
                I am Professional Software Engineer from Ukraine with more than {experience} years
                of experience in Front-End development. Innovative, self-starter and reliable.
                <br />
                <br />
                I’ve got a lot of practical experience with a number of modern technologies
                and tools (e.g. ES2017, React, Typescript, Backbone, HTML5, CSS3 etc.).
            </p>
        </FakePopup>
        <Character />
    </Section>
);

export default AboutMeSection;
