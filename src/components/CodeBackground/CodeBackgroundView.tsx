import React from 'react';
import classNames from 'classnames';
import styled from '@emotion/styled';
import fullText from './code.txt';
import Timeout = NodeJS.Timeout;

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

const keyWords = [
    'from',
    'do',
    'if',
    'in',
    'for',
    'new',
    'try',
    'var',
    'case',
    'else',
    'enum',
    'null',
    'this',
    'true',
    'void',
    'with',
    'break',
    'catch',
    'class',
    'const',
    'false',
    'super',
    'throw',
    'while',
    'delete',
    'export',
    'import',
    'return',
    'switch',
    'typeof',
    'default',
    'extends',
    'finally',
    'continue',
    'debugger',
    'function',
    'type',
];

const specialSymbols = [
    ';',
    ',',
    '(',
    ')',
    '{',
    '}',
    '=',
    '.',
];

const specialSymbolsHighlighted = [
    ';',
    ',',
];

const isSpace = (str: string | JSX.Element): boolean => typeof str === 'string' && (/\s/).test(str);
const isQuotedWord = (str: string | JSX.Element): boolean => typeof str === 'string' && (/'(.*?)'|"|`(.*?)"/).test(str);
const isSpecialSmbl = (str: string | JSX.Element): boolean => typeof str === 'string' && specialSymbols.includes(str);
const isCommentLine = (str: string | JSX.Element): boolean => typeof str === 'string' && (str === '//' || str.indexOf('//') === 0);
const isHtmlOpenTagWord = (str: string | JSX.Element): boolean => typeof str === 'string' && (str.indexOf('<') === 0);
const isHtmlCloseTagWord = (str: string | JSX.Element): boolean => typeof str === 'string' && (str === '>' || str === '/>');
const getWordType = (word: string): typeof KeyWord | typeof Quoted | null => {
    if (keyWords.includes(word) || specialSymbolsHighlighted.includes(word)) {
        return KeyWord;
    }
    if (isQuotedWord(word)) {
        return Quoted;
    }
    return null;
};

type Props = {
    blur: boolean,
    className?: string,
};

type State = {
    textToPrint: string,
    wordsToPrint: (JSX.Element | string)[],
};

export default class CodeBackground extends React.Component<Props, State> {
    printInterval: Timeout | null = null;

    constructor(props: Props) {
        super(props);
        this.state = {
            textToPrint: fullText,
            wordsToPrint: [],
        };
    }

    componentDidMount(): void {
        this.startPrinting();
    }

    componentWillUnmount(): void {
        this.stopPrinting();
    }

    startPrinting: () => void = () => {
        this.printInterval = setInterval(() => this.setState(
            (state: State): State | null => {
                const { textToPrint, wordsToPrint } = state;
                const symbol = textToPrint[0];

                if (!symbol) {
                    this.stopPrinting();

                    return state;
                }

                const newWordsToPrint: (JSX.Element | string)[] = wordsToPrint.slice();
                const beforeLastWord = newWordsToPrint[newWordsToPrint.length - 2] || '';
                const lastWord = newWordsToPrint[newWordsToPrint.length - 1] || '';
                const isComment = isCommentLine(lastWord);
                const isHtmlOpenTag = !isComment && isHtmlOpenTagWord(lastWord);
                const isHtmlCloseTag = !isComment && isHtmlCloseTagWord(lastWord);
                const isSpaceSymbol = !isComment && isSpace(symbol);
                const isSpecialSymbol = !isComment && isSpecialSmbl(symbol);
                const isSpecialWord = !isComment && isSpecialSmbl(lastWord);
                const isSpaceWord = !isComment && isSpace(lastWord);
                let Component;

                if (lastWord && typeof lastWord === 'string' && (isSpecialSymbol || isSpaceSymbol)) {
                    Component = !isSpaceWord && getWordType(lastWord);
                }

                if (isComment && symbol === '\n') {
                    Component = Comment;
                }

                if ((isHtmlOpenTag && isSpaceSymbol) || (isHtmlCloseTag && beforeLastWord !== '=')) {
                    Component = HtmlTag;
                }

                if (Component) {
                    newWordsToPrint[newWordsToPrint.length - 1] = (
                        <Component key={newWordsToPrint.length - 1}>
                            {lastWord}
                        </Component>
                    );
                }

                if (symbol === '\n') {
                    newWordsToPrint.push(<br key={newWordsToPrint.length} />);
                } else if (!lastWord || typeof lastWord !== 'string' || isSpecialSymbol || isSpecialWord) {
                    newWordsToPrint.push(symbol);
                } else if ((isSpaceSymbol && isSpaceWord) || (!isSpaceSymbol && !isSpaceWord)) {
                    newWordsToPrint[newWordsToPrint.length - 1] = lastWord + symbol;
                } else {
                    newWordsToPrint.push(symbol);
                }

                return {
                    textToPrint: textToPrint.slice(1),
                    wordsToPrint: newWordsToPrint,
                };
            },
        ), 75);
    };

    stopPrinting: () => void = () => {
        if (this.printInterval) {
            clearInterval(this.printInterval);
        }
    }

    render(): JSX.Element {
        const { blur, className } = this.props;
        const { wordsToPrint } = this.state;

        return (
            <Container className={classNames(className, { blur })}>
                <PaddingWrap>
                    {wordsToPrint}
                </PaddingWrap>
            </Container>
        );
    }
}
