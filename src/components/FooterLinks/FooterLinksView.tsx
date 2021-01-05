import React from 'react';
import { LinkedInIcon, GithubIcon, FacebookIcon } from '../icons';
import { LINKEDIN_LINK, GITHUB_LINK, FACEBOOK_LINK } from '../../constants';
import './FooterLinks.scss';

const FooterLinks = (): JSX.Element => (
    <div className="FooterLinks">
        <a href={FACEBOOK_LINK} title="Facebook" target="_blank" rel="me noopener noreferrer">
            <FacebookIcon />
        </a>
        <a href={GITHUB_LINK} title="Github" target="_blank" rel="me noopener noreferrer">
            <GithubIcon />
        </a>
        <a href={LINKEDIN_LINK} title="LinkedIn" target="_blank" rel="me noopener noreferrer">
            <LinkedInIcon />
        </a>
    </div>
);

export default FooterLinks;
