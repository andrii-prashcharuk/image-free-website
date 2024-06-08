import React, { JSX } from 'react';
import styled from '@emotion/styled';
import { LinkedInIcon, GithubIcon, FacebookIcon } from '../icons';
import { LINKEDIN_LINK, GITHUB_LINK, FACEBOOK_LINK } from '../../constants';
import { StyledA } from '../StyledA';

const Container = styled.div`
    display: flex;

    a {
        display: flex;
        margin: 0 12px;

        svg {
            fill: ${({ theme }) => theme.color.blue};
            transition: fill 300ms;
        }
        svg:hover {
            fill: ${({ theme }) => theme.color.darkBlue};
        }
    }

    @media only screen and (min-width: 1920px) {
        & a {
            margin: 0 16px;
        }
    }
`;

export function FooterLinks(): JSX.Element {
    return (
        <Container>
            <StyledA href={FACEBOOK_LINK} title="Facebook" target="_blank" rel="me noopener noreferrer">
                <FacebookIcon />
            </StyledA>
            <StyledA href={GITHUB_LINK} title="Github" target="_blank" rel="me noopener noreferrer">
                <GithubIcon />
            </StyledA>
            <StyledA href={LINKEDIN_LINK} title="LinkedIn" target="_blank" rel="me noopener noreferrer">
                <LinkedInIcon />
            </StyledA>
        </Container>
    );
}
