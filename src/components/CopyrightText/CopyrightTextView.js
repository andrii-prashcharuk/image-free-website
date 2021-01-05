// @flow
import React from 'react';
import type { Node } from 'react';
import './CopyrightText.scss';

const YEAR = (new Date()).getFullYear();

const CopyrightText = (): Node => (
    <p className="CopyrightText">
        Copyright &copy;&nbsp;
        {YEAR}
        &nbsp;Andrii Prashcharuk
    </p>
);

export default CopyrightText;
