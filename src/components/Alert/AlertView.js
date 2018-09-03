// @flow
import React from 'react';
import classNames from 'classnames';
import type { Node } from 'react';
import './Alert.scss';

type Props = {
    children: Node,
    show: boolean,
    onCloseRequest: * => *,
};

const Alert = ({ children, onCloseRequest, show }: Props) => (
    <div className={classNames('AlertWrap', { show })}>
        <div className="Alert">
            <div className="Alert-Body">{children}</div>
            <button onClick={onCloseRequest}>OK</button>
        </div>
        <div
            className="Alert-Overlay"
            role="button"
            onClick={show ? onCloseRequest : undefined}
            onKeyPress={show ? onCloseRequest : undefined}
            tabIndex={0}
        />
    </div>
);

export default Alert;
