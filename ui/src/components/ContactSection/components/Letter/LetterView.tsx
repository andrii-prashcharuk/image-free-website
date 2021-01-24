import React from 'react';
import styled from '@emotion/styled';
import Envelope from '../Envelope';
import MainBg from '../LetterMainBg';
import Paper from '../LetterPaper';
import { TopOpened, TopClosed } from '../LetterTop';
import { envelopeTransformCSS } from '../../styles';

const LetterWrap = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 600px;
    max-width: 85%;
    padding-bottom: 42px;
    box-sizing: border-box;
    transition: transform 1s;
    transition-delay: 2s;
    overflow: hidden;

    .closed & {
        transform: scale3d(0.3, 0.3, 1);
    }

    @media only screen and (min-width: 1920px) {
        & {
            width: 800px;
        }
    }
`;

const EnvelopeTop = styled.div`
    position: absolute;
    width: 100%;
    max-height: 30%;
    top: 25%;
    z-index: 2;
    ${envelopeTransformCSS}
`;

const LetterPaper = styled.div`
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 24px;
    position: relative;
    z-index: 2;
    transition: transform 600ms ease-in;
    transition-delay: 300ms;
    
    .closed & {
        transform: translate3d(0, calc(100% + 50px), 0);
    }

    button {
        flex: none;
        align-self: flex-end;
    }

    input {
        width: calc(72.3% - 24px);
    }

    textarea {
        flex: 1 1 100%;
    }

    @media only screen and (max-width: 600px) {
        & {
            transition: transform 450ms ease-in;
            transition-delay: 250ms;
        }
    }

    @media only screen and (min-width: 1920px) {
        & {
            padding: 32px;
        }
    }
`;

export type Props = {
    children: JSX.Element,
};

const Letter = ({ children }: Props): JSX.Element => (
    <LetterWrap>
        <EnvelopeTop>
            <TopOpened />
            <TopClosed />
        </EnvelopeTop>
        <LetterPaper>
            <Paper />
            {children}
        </LetterPaper>
        <MainBg />
        <Envelope />
    </LetterWrap>
);

export default Letter;
