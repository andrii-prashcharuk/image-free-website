import React from 'react';
import classNames from 'classnames';
import './Alert.scss';

type Props = {
    children: JSX.Element,
    show: boolean,
    onCloseRequest: () => any,
};

const Alert = ({ children, onCloseRequest, show }: Props): JSX.Element => (
    <div className={classNames('AlertWrap', { show })}>
        <div className="Alert">
            <div className="Alert-Body">{children}</div>
            <button type="button" onClick={onCloseRequest}>OK</button>
        </div>
        <div
            className="Alert-Overlay"
            role="button"
            onClick={show ? onCloseRequest : undefined}
            onKeyPress={show ? onCloseRequest : undefined}
            tabIndex={0}
            aria-label="Close"
        />
    </div>
);

export default Alert;
