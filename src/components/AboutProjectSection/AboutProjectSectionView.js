// @flow
import React from 'react';
import Section from '../Section';
import TechLogo from '../TechLogo';
import './AboutProjectSection.scss';

const AboutProjectSection = () => (
    <Section id="about-project" className="AboutProjectSection">
        <div className="AboutProjectSection-TechLogos">
            <TechLogo type="html5" />
            <TechLogo type="css3" />
            <TechLogo type="js" />
            <TechLogo type="react" />
            <TechLogo type="redux" />
        </div>
        <div className="AboutProjectSection-Content">
            <h3>About Project</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur <a href="/#">some link</a> elit.
                Donec ex sem, auctor vel magna et, ullamcorper sodales tortor.
                Etiam augue ligula, rutrum at augue quis, tincidunt vestibulum diam.
                Nulla viverra ipsum sed scelerisque tempor. Nullam non euismod sapien.
                Nunc at suscipit augue.
            </p>
        </div>
        <div className="AboutProjectSection-TechLogos">
            <TechLogo type="git" />
            <TechLogo type="webpack" />
            <TechLogo type="flow" />
            <TechLogo type="sass" />
            <TechLogo type="babel" />
        </div>
    </Section>
);

export default AboutProjectSection;
