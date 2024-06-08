import React, { JSX } from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import fullText from './code.txt';
import { usePrintedWords } from './hooks';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    font-family: 'Anonymous Pro', monospace;
    white-space: pre;
    background: ${({ theme }) => theme.color.darkGray};
    color: #A9B7C6;

    &.blur {
        filter: blur(2px);
    }
`;

const PaddingWrap = styled.div`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
    padding: 20px;
`;

const KeyWord = styled.span`
    font-weight: bold;
    color: #CC7832;
`;

const Quoted = styled.span`
    color: #6A8759;
`;

const Comment = styled.span`
    color: #808080;
`;

const HtmlTag = styled.span`
    color: #FFC66D;
`;

const WordComponents = {
    Comment,
    HtmlTag,
    KeyWord,
    Quoted,
};

type Props = {
    blur: boolean,
    className?: string,
};

export function CodeBackground({ blur, className }: Props): JSX.Element {
    const wordsToPrint = usePrintedWords(fullText);

    return (
        <Container className={classNames(className, { blur })}>
            <PaddingWrap>
                {wordsToPrint.map((word) => {
                    if (typeof word === 'string') {
                        return word;
                    }
                    if (word.type === 'br') {
                        return <br key={word.key} />;
                    }
                    const Component = WordComponents[word.type];

                    return <Component key={word.key}>{word.text}</Component>;
                })}
            </PaddingWrap>
        </Container>
    );
}
