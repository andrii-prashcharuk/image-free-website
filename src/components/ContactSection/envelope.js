// @flow
import React from 'react';
import type { Node } from 'react';

export const envelope: Node = (
    <svg
        className="main"
        mlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 320"
        preserveAspectRatio="none"
    >
        <g>
            <polygon
                className="cls-1"
                points="496 0 496 0 248 157.6 0 0 0 0 0 0 0 320 496 320 496 0"
            />
            <polygon
                className="cls-2"
                points="248 160 248 157.6 248 157.6 0 0 0 0 0 0 0 320 1.6 320 0 320 248 160"
            />
            <polygon className="cls-3" points="496 320 248 160 0 320 1.6 320 494.4 320 496 320" />
        </g>
    </svg>
);

export const mainBg: Node = (
    <svg
        className="mainBg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 320"
        preserveAspectRatio="none"
    >
        <g>
            <polyline className="cls-1" points="496 0 496 320 0 320 0 0" />
            <polyline className="cls-2" points="248 0 496 0 496 320 248 320" />
        </g>
    </svg>
);

export const topOpen: Node = (
    <svg
        className="topOpen"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 161.6"
        preserveAspectRatio="none"
    >
        <g>
            <polyline className="cls-1" points="0 161.6 248 0 496 161.6" />
            <polyline className="cls-2" points="248 0 496 161.6 248 161.6" />
        </g>
    </svg>
);

export const topClosed: Node = (
    <svg className="topClosed" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 158" preserveAspectRatio="none">
        <polygon className="cls-1" points="0 0 248 158 496 0 494.4 0 1.6 0 0 0" />
    </svg>
);

export const paper: Node = (
    <svg
        className="paper"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 328.74 432"
        preserveAspectRatio="none"
    >
        <g>
            <path
                className="cls-1"
                d="M26.34,0C15.14,0,.74,12.8.74,24V412.8c0,11.2,14.4,19.2,25.6,19.2h284.8c11.2,0,17.6-8,17.6-19.2V87.2L240.74,0Z"
            />
            <path className="cls-2" d="M328.74,416V87.2L240.74,0H26.34C15.14,0,.74,12.8.74,24" />
            <polygon
                className="cls-3"
                points="328.74 158.4 328.74 88 285.54 44.8 250.34 81.6 328.74 158.4"
            />
            <path
                className="cls-4"
                d="M240.74,66.4V0l88,88h-67.2C249.54,88,240.74,77.6,240.74,66.4Z"
            />
        </g>
    </svg>
);
