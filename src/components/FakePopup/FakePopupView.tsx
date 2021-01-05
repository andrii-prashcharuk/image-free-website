import React from 'react';
import './FakePopup.scss';

type Props = {
    header: string | JSX.Element,
    children: JSX.Element | JSX.Element[],
};

const FakePopup = ({ header, children }: Props): JSX.Element => (
    <div className="FakePopup">
        <div className="FakePopup-Header">
            <div className="FakePopup-HeaderButtons">
                <div className="FakePopup-Button" />
                <div className="FakePopup-Button" />
                <div className="FakePopup-Button" />
            </div>
            <span>{header}</span>
        </div>
        <div className="FakePopup-Body">{children}</div>
    </div>
);

export default FakePopup;
