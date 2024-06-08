import React, { JSX } from 'react';
import styled from '@emotion/styled';
import { Section } from '../Section';
import { TechIcon } from '../TechIcon';
import { StyledA } from '../StyledA';

const CLIENT_URL = 'https://github.com/monext/image-free-website';

const StyledSection = styled(Section)`
    overflow: hidden;
    z-index: 1;
    background: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media only screen and (max-width: 600px) {
        & {
            padding: 54px 12px 12px;
        }
    }
`;

const TechLogos = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Content = styled.div`
    max-width: 1000px;
    text-align: center;
    align-self: center;
    
    p {
        margin-bottom: 0;
    }

    @media only screen and (max-width: 600px) {
        & {
            h3 {
                font-size: 28px;
                margin-bottom: 18px;
            }
            p {
              font-size: 16px;
            }
        }
    }
`;

export function AboutProjectSection(): JSX.Element {
    return (
        <StyledSection id="about-project">
            <TechLogos>
                <TechIcon type="html5" />
                <TechIcon type="css3" />
                <TechIcon type="ts" />
                <TechIcon type="react" />
                <TechIcon type="redux" />
            </TechLogos>
            <Content>
                <h3>About Project</h3>
                <p>
                    This project was created to show how powerful web technologies are. All the
                    graphics you see here are SVG and HTML elements embedded in the source code that
                    means they are small and doesn’t required additional requests to the server.
                    The web page is 100% responsive and looks great on mobile and desktop devices.
                    <br />
                    The size of the compiled and gziped project is 107KB only!
                    <br />
                    <br />
                    Check out my github&nbsp;
                    <StyledA href={CLIENT_URL} target="_blank" rel="noopener noreferrer">repository</StyledA>
                &nbsp;to see how it works.
                </p>
            </Content>
            <TechLogos>
                <TechIcon type="git" />
                <TechIcon type="webpack" />
                <TechIcon type="emotion" />
                <TechIcon type="docker" />
                <TechIcon type="jest" />
            </TechLogos>
        </StyledSection>
    );
}
