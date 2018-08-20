// @flow
import React from 'react';
import { LinkedInIcon, GithubIcon, FacebookIcon } from '../icons';
import './FooterLinks.scss';

const LINKEDIN_LINK = 'https://www.linkedin.com/in/prashcharuk';
const GITHUB_LINK = 'https://github.com/monext';
const FACEBOOK_LINK = 'https://www.facebook.com/prashcharuk';

const FooterLinks = () => (
    <div className="FooterLinks">
        <a href={FACEBOOK_LINK} title="Facebook" target="_blank">
            <FacebookIcon />
        </a>
        <a href={GITHUB_LINK} title="Github" target="_blank">
            <GithubIcon />
        </a>
        <a href={LINKEDIN_LINK} title="LinkedIn" target="_blank">
            <LinkedInIcon />
        </a>
    </div>
);

export default FooterLinks;
