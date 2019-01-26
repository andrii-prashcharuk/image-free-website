// @flow
import React from 'react';
import './CopyrightText.scss';

const YEAR = (new Date()).getFullYear();

const CopyrightText = () => (
    <p className="CopyrightText">
        Copyright &copy;&nbsp;
        {YEAR}
        &nbsp;Andrii Prashcharuk
    </p>
);

export default CopyrightText;
