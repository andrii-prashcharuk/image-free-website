/** @jsx jsx */
import React, { JSX } from 'react';
import styled from '@emotion/styled';
import { jsx, css } from '@emotion/react';
import { Section } from '../Section';
import { FakePopup } from '../FakePopup';
import { Character } from '../Character';
import { Logo } from '../Logo';
import { getYearsOfExperience } from '../../utils';

const experience = getYearsOfExperience();

const StyledSection = styled(Section)`
    z-index: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    @media only screen and (max-width: 750px) {
        & {
            flex-direction: column-reverse;
        }
    }
`;

const StyledFakePopup = styled(FakePopup)`
    margin-top: -20%;

    @media only screen and (max-width: 750px) {
        & {
            position: relative;
            width: 100%;
            margin-top: -22%;
            z-index: 1;
        }
    }

    @media only screen and (min-width: 1920px) {
        & {
            max-width: 700px;
            margin-top: -15%;
        }
    }
`;

const fakePopupBodyCss = css`
    display: flex;
    flex: 1 1 100%;
    padding: 16px;

    p {
        margin: 0;
        text-align: justify;
    }

    @media only screen and (max-width: 750px) {
        & {
            display: block;
            font-size: 16px;
            line-height: 20px;
        }
    }

    @media only screen and (min-width: 1920px) {
        & {
            padding: 32px;
        }
    }
`;

const StyledLogo = styled(Logo)`
    height: auto;
    align-self: flex-start;
    flex: 0 0 80px;
    margin-right: 16px;

    @media only screen and (max-width: 750px) {
        & {
            float: left;
            width: 48px;
        }
    }

    @media only screen and (min-width: 1920px) {
        & {
            flex: 0 0 110px;
            margin-right: 36px;
        }
    }
`;

const StyledCharacter = styled(Character)`
    margin-top: 20%;

    @media only screen and (max-width: 750px) {
        & {
            margin-top: 0;
            width: 30%;
            align-self: flex-end;
        }
    }

    @media only screen and (min-width: 1920px) {
        & {
            width: 240px;
            margin-top: 15%;
        }
    }
`;

export function AboutMeSection(): JSX.Element {
    return (
        <StyledSection id="about-me">
            <StyledFakePopup header="Hi there!" bodyCss={fakePopupBodyCss}>
                <StyledLogo />
                <p>
                    I’m a Professional Software Engineer from Ukraine with more than&nbsp;
                    {experience}
                &nbsp;years of experience in Front-End development.
                    <br />
                    <br />
                    As a Front-end Engineer, I believe software development is a type of modern art
                    and I’m interested in using the latest tools and technologies to breathe life
                    into web applications, make them animated, responsive, and dynamic.
                </p>
            </StyledFakePopup>
            <StyledCharacter />
        </StyledSection>
    );
}
