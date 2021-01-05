import React from 'react';
import './CopyrightText.scss';

const YEAR = (new Date()).getFullYear();

const CopyrightText = (): JSX.Element => (
    <p className="CopyrightText">
        Copyright &copy;&nbsp;
        {YEAR}
        &nbsp;Andrii Prashcharuk
    </p>
);

export default CopyrightText;
