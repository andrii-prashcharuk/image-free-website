import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const handWaving = keyframes`
    0% {
        transform: rotate3d(0, 0, 1, 0deg);
    }
    50% {
        transform: rotate3d(0, 0, 1, 8deg);
    }
    100% {
        transform: rotate3d(0, 0, 1, 0deg);
    }
`;

const headShaking = keyframes`
    0% {
        transform: rotate3d(0, 0, 1, 0.75deg);
    }
    50% {
        transform: rotate3d(0, 0, 1, -0.75deg);
    }
    100% {
        transform: rotate3d(0, 0, 1, 0.75deg);
    }
`;

const hairColor = '#5d4341';
const eyesColor = '#644831';
const noseColor = '#f9bba5';
const mouthColor = '#d48694';
const skinColor = '#fccfbd';
const tShirtColor = '#2574A9';
const pantsColor = '#a63c23';
const shoesColor = '#6d6d6d';

const Container = styled.div`
    width: 180px;
    position: relative;
`;

const HeadSvg = styled.svg`
    display: block;
    position: absolute;
    width: 100%;
    top: -56%;
    left: -13%;
    transform-origin: bottom center;
    -webkit-animation: ${headShaking} 2s infinite;
    -moz-animation: ${headShaking} 2s infinite;
    animation: ${headShaking} 2s infinite;
    
    .cls-1 {
        fill: ${skinColor};
    }
    
    .cls-2, .cls-6 {
        fill: ${hairColor};
    }
    
    .cls-2 {
        opacity: 0.2;
    }
    
    .cls-3, .cls-5 {
        fill: none;
        stroke-linecap: round;
    }
    
    .cls-3 {
        stroke: ${noseColor};
        stroke-miterlimit: 10;
        stroke-width: 4.67px;
    }
    
    .cls-4 {
        fill: ${eyesColor};
    }
    
    .cls-5 {
        stroke: ${mouthColor};
        stroke-linejoin: round;
        stroke-width: 2.8px;
    }
`;

const BodySvg = styled.svg`
    display: block;
    
    .cls-1 {
      fill: ${pantsColor};
    }
    
    .cls-2 {
      fill: ${({ theme }) => theme.color.black};
    }
    
    .cls-3 {
      fill: ${shoesColor};
    }
    
    .cls-4 {
        fill: none;
        stroke: ${skinColor};
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 14.02px;
    }
    
    .cls-5 {
      fill: ${tShirtColor};
    }
    
    .cls-6 {
      fill: ${skinColor};
    }
`;

const HandSvg = styled.svg`
    display: block;
    position: absolute;
    width: 100%;
    top: -48.5%;
    left: 52%;
    transform-origin: bottom left;
    -webkit-animation: ${handWaving} 2s infinite;
    -moz-animation: ${handWaving} 2s infinite;
    animation: ${handWaving} 2s infinite;
    
    .cls-1 {
        fill: none;
        stroke: ${skinColor};
        stroke-linecap: round;
        stroke-miterlimit: 10;
        stroke-width: 14.02px;
    }
    
    .cls-2 {
        fill: ${tShirtColor};
    }
`;

type Props = {
    className?: string,
};

const Character = ({ className }: Props): JSX.Element => (
    <Container className={className}>
        <HeadSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 145 292.4"
        >
            <g>
                <path
                    className="cls-1"
                    d="M121.7,236.55c-.5,4.26-2.1,7.69-3.8,8.44l0,.21c-1,4-3.07,11.58-3.33,12.52l0,.09,0,.08c-6.54,17.57-19.33,30.4-34.59,33.49l-.26.06a36,36,0,0,1-6.9.66h0a35.68,35.68,0,0,1-7.15-.72C50.09,288.24,37.13,275,30.7,257l0,0c-1.17-3.89-2.12-7.85-3.09-11.79v-.07c-1.87-.25-3.74-3.92-4.28-8.57-.59-5,.54-9.2,2.53-9.43,1.39-.17,2.84,1.7,3.78,4.55,1.37-2.76,2.91-6.61,4.19-9.64,1.14-2.7,4-7.68,5-10.39,3.07-8.2-.29-17.83,4.67-20.56,1.9-1,8.27-3.11,12.62-2.1s10.74,3.39,23.6,4.44c14.82,1.21,22.18-1.22,25.46,1.4,4.46,3.57,1.76,12.91,4.67,20.33,1.66,4.23,2.38,8.33,5,12.53a19.42,19.42,0,0,1,1.14,2.56c.9-2,2.07-3.24,3.22-3.11C121.16,227.36,122.29,231.58,121.7,236.55Z"
                />
                <path
                    className="cls-2"
                    d="M101.87,270.18c-.78.83-4.94,5.15-5.39,3.33-.53-2.15-.18-4.67-.28-6.88a12.23,12.23,0,0,0-3-7.87l-.12-.13a10.22,10.22,0,0,0-3.27-2.14c-.69-.3-1.4-.56-2.11-.8-4.22-1.43-12.16-3.29-15-3.29s-10.76,1.86-15,3.29c-.71.24-1.42.5-2.11.8a10.22,10.22,0,0,0-3.27,2.14c-.14.14-.27.29-.4.44a12.52,12.52,0,0,0-2.7,7.56c-.09,2.21.26,4.73-.27,6.88-.46,1.82-4.62-2.5-5.4-3.33-8-6.79-7.08-6.68-16-25,1,3.94,1.93,7.91,3.09,11.79l0,0c6.43,18,19.39,31.2,34.88,34.35a35.68,35.68,0,0,0,7.15.72h0a36,36,0,0,0,6.9-.66l.26-.06c15.25-3.09,28-15.92,34.59-33.49l0-.08,0-.09c.26-.94,2.36-8.56,3.33-12.52C109,263.5,109.89,263.39,101.87,270.18Zm-11.47,3a17,17,0,0,1-7.77,7.67c-1.63.86-3.74,1.5-5.2.38-1-.78-1.35-2.17-1.85-3.35a3.31,3.31,0,0,0-2.35-2.18h-.87c-1.12,0-2,1.1-2.51,2.19S69,280.43,68,281.22c-1.46,1.12-3.57.48-5.21-.38a17,17,0,0,1-7.76-7.67c-1.52-3.37-1.37-7.63,1-10.51,1.88-2.34,4.87-3.49,7.81-4a64.67,64.67,0,0,1,8.91-1.23,64.48,64.48,0,0,1,8.91,1.23c2.94.55,5.93,1.71,7.82,4C91.78,265.53,91.92,269.79,90.4,273.16Z"
                />
                <line className="cls-3" x1="72.67" y1="229.67" x2="72.67" y2="242.24" />
                <ellipse className="cls-4" cx="88.79" cy="229.67" rx="2.8" ry="6.07" />
                <path
                    className="cls-4"
                    d="M59.51,229.67c0,3.35-1.26,6.07-2.8,6.07s-2.8-2.72-2.8-6.07,1.25-6.07,2.8-6.07S59.51,226.32,59.51,229.67Z"
                />
                <path className="cls-5" d="M62.39,265.37q10.28,7,20.56,0" />
                <path
                    className="cls-6"
                    d="M119.16,235.93a.88.88,0,0,1-.16.38c-.09.1-.2.1-.32,0h0c-1-.78-2.9-7.06-3.87-8.63-2.61-4.21-3.33-8.3-5-12.53-2.92-7.41-.21-16.76-4.67-20.33-3.28-2.63-10.64-.2-25.46-1.4-12.86-1-19.29-3.44-23.6-4.44s-10.72,1.07-12.62,2.1c-5,2.73-1.61,12.35-4.67,20.56-1,2.71-3.85,7.69-5,10.39-2,4.71-4.57,11.35-6.24,12.91-.46.41-.85.46-1.14,0l-.08-.15c-1.73-3.65.42-32,8.25-49.06,1.07-2.33,4.17-6,11.14-11.59,1.44-1.15,3.78-2.25,5.27-3.28,1-.69,5.73-4.07,7.18-4.57,2.4-.82,9.18-2.81,10.93-2.81s4.57,0,5.74,0a36.87,36.87,0,0,1,4.21-.53c2,0,9.64,3.64,10.22,4.06,1,.71,6.66,3.43,6.66,3.43s5.22,1.92,6.63,3.33c7.17,5.93,9.08,15.33,9.81,17.13C117.87,204.38,120.32,230.84,119.16,235.93Z"
                />
            </g>
        </HeadSvg>
        <HandSvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 145 292.4"
        >
            <g>
                <path className="cls-1" d="M11,277.66a269.52,269.52,0,0,0,38.87-56.45" />
                <path
                    className="cls-2"
                    d="M20.89,252.56l5,5.2L32,263.45l-16.1,21.74-5,6.76s-7-8-8-11.11c-.74-1.43-3.36-5-2.28-6.63C3.7,273.13,20.89,252.56,20.89,252.56Z"
                />
            </g>
        </HandSvg>
        <BodySvg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 145 292.4"
        >
            <g>
                <path
                    className="cls-1"
                    d="M86.76,212.28v76.65h-28V232.11a3.48,3.48,0,0,0-3.48-3.48H52.75a3.49,3.49,0,0,0-3.48,3.48v56.82H21.65V212.28Z"
                />
                <g>
                    <path
                        className="cls-2"
                        d="M89.43,289.47a5.73,5.73,0,0,1,.15,2.61.45.45,0,0,1-.12.27.47.47,0,0,1-.3.07h-33a7.14,7.14,0,0,1,.16-2.94H89.43Z"
                    />
                    <path
                        className="cls-3"
                        d="M89.43,289.47H56.37a7.13,7.13,0,0,1,5-5.24,14.65,14.65,0,0,1,3.45-.25l16.93,0a11.22,11.22,0,0,1,2.75.22c.19,0,.38.11.57.18a6.51,6.51,0,0,1,2.1,1.41A8.21,8.21,0,0,1,89.43,289.47Z"
                    />
                </g>
                <g>
                    <path
                        className="cls-2"
                        d="M51.89,289.47a5.73,5.73,0,0,1,.15,2.61.45.45,0,0,1-.12.27.47.47,0,0,1-.3.07h-33a7.14,7.14,0,0,1,.16-2.94H51.89Z"
                    />
                    <path
                        className="cls-3"
                        d="M51.89,289.47H18.83a7.13,7.13,0,0,1,5-5.24,14.65,14.65,0,0,1,3.45-.25l16.93,0a11.22,11.22,0,0,1,2.75.22c.19,0,.38.11.57.18a6.51,6.51,0,0,1,2.1,1.41A8.21,8.21,0,0,1,51.89,289.47Z"
                    />
                </g>
            </g>
            <g>
                <g>
                    <path
                        className="cls-4"
                        d="M30,139.86c-7.83,2.28-8.72,3.43-8.72,3.43-3.61,2.52-12.48,42.37-12.46,75.07"
                    />
                    <path
                        className="cls-5"
                        d="M30.38,132.15l-2,8.18-6.74,27.61-1.89,7.74-6.94-1.49-8.65-1.86s4.19-24.41,7.3-34.51c.59-1.89,3.66-4.38,5.23-4.74C19.74,131.92,30.38,132.15,30.38,132.15Z"
                    />
                </g>
                <path
                    className="cls-5"
                    d="M86.76,138.69v73.59H21.65V138.69a6.54,6.54,0,0,1,6.54-6.54h52A6.56,6.56,0,0,1,86.76,138.69Z"
                />
                <path
                    className="cls-6"
                    d="M61,127v4.66a7,7,0,0,1-14.06,0V127c2.34.48,4.6,0,7,0h0C56.35,127,58.79,127.44,61,127Z"
                />
            </g>
        </BodySvg>
    </Container>
);

export default Character;
