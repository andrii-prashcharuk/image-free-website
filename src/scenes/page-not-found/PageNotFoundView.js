// @flow
import React from 'react';
import type { Node } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import './PageNotFound.scss';

const PageNotFound = (): Node => (
    <div className="PageNotFound darkColorScheme">
        <div className="PageNotFound-ErrorCode">
            4
            <Logo />
            4
        </div>
        <div className="PageNotFound-Text">The page you’re trying to reach does not exist :(</div>
        <Link to="/">
            <button type="button">Back to Home Page</button>
        </Link>
    </div>
);

export default PageNotFound;
