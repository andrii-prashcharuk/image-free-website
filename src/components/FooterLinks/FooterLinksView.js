// @flow
import React from 'react';
import { LinkedInIcon, GithubIcon, FacebookIcon } from '../icons';
import { LINKEDIN_LINK, GITHUB_LINK, FACEBOOK_LINK } from '../../constants';
import './FooterLinks.scss';

const FooterLinks = () => (
    <div className="FooterLinks">
        <a href={FACEBOOK_LINK} title="Facebook" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
        </a>
        <a href={GITHUB_LINK} title="Github" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
        </a>
        <a href={LINKEDIN_LINK} title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
        </a>
    </div>
);

export default FooterLinks;
