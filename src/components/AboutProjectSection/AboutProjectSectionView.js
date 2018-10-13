// @flow
import React from 'react';
import Section from '../Section';
import TechLogo from '../TechLogo';
import './AboutProjectSection.scss';

const CLIENT_URL = 'https://github.com/monext/image-free-website';
const SERVER_URL = 'https://github.com/monext/image-free-website-server';

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
                This project was created to show how powerful web technologies are. All the
                graphics you see here are SVG and HTML elements embedded in the source code that
                means they are small and doesn’t required additional requests to the server.
                The web page is 100% responsive and looks great on mobile and desktop devices.
                <br />
                The size of the compiled project is 374KB only!
                <br />
                <br />
                Check out my github repositories for &nbsp;
                <a href={CLIENT_URL} target="_blank" rel="noopener noreferrer">client</a>
                &nbsp; and &nbsp;
                <a href={SERVER_URL} target="_blank" rel="noopener noreferrer">server</a>
                &nbsp; to see how it works.
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
