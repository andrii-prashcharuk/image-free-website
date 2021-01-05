import React from 'react';
import type { MouseEvent } from 'react';
import classNames from 'classnames';
import './Logo.scss';

type Props = {
    onClick?: (e: MouseEvent<SVGSVGElement>) => any
};

const Logo = ({ onClick }: Props): JSX.Element => (
    <svg
        className={classNames('Logo', { interactive: !!onClick })}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 820 875"
        onClick={onClick}
    >
        <g id="bg">
            <g>
                <circle className="cls-1" cx="410" cy="437.5" r="400" />
                <circle className="cls-2" cx="410" cy="437.5" r="400" />
            </g>
        </g>
        <g id="shape">
            <g>
                <line className="cls-3" x1="447.5" y1="25" x2="210" y2="437.5" />
                <line className="cls-3" x1="610" y1="437.5" x2="372.5" y2="850" />
                <line className="cls-3" x1="465.66" y1="187.5" x2="610" y2="437.5" />
                <line className="cls-3" x1="210" y1="438" x2="354.34" y2="688" />
                <line className="cls-2" x1="310" y1="287.5" x2="510" y2="287.5" />
            </g>
        </g>
    </svg>
);

Logo.defaultProps = {
    onClick: undefined,
};

export default Logo;
