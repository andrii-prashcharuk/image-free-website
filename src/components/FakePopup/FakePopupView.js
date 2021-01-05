// @flow
import React from 'react';
import type { Node } from 'react';
import './FakePopup.scss';

type Props = {
    header: string | Node,
    children: Node,
};

const FakePopup = ({ header, children }: Props): Node => (
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
