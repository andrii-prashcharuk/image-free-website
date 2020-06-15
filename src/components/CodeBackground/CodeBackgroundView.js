// @flow
/* eslint-disable react/no-unused-state */
/* globals IntervalID: true */
import React from 'react';
import classNames from 'classnames';
import type { Node } from 'react';
import fullText from './code.txt';
import './CodeBackground.scss';

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

const isSpace = (str: string | Node): boolean => typeof str === 'string' && (/\s/).test(str);
const isQuotedWord = (str: string | Node): boolean => typeof str === 'string' && (/'(.*?)'|"(.*?)"/).test(str);
const isSpecialSmbl = (str: string | Node): boolean => typeof str === 'string' && specialSymbols.includes(str);
const isCommentLine = (str: string | Node): boolean => typeof str === 'string' && (str === '//' || str.indexOf('//') === 0);
const isHtmlOpenTagWord = (str: string | Node): boolean => typeof str === 'string' && (str.indexOf('<') === 0);
const isHtmlCloseTagWord = (str: string | Node): boolean => typeof str === 'string' && (str === '>' || str === '/>');
const getWordType = (word: string): string | null => {
    if (keyWords.includes(word) || specialSymbolsHighlighted.includes(word)) {
        return 'keyWord';
    }
    if (isQuotedWord(word)) {
        return 'quoted';
    }
    return null;
};

type Props = {
    blur: boolean,
};

type State = {
    textToPrint: string,
    wordsToPrint: (Node | string)[],
};

export default class CodeBackground extends React.Component<Props, State> {
    printInterval: IntervalID | null = null;

    constructor(props: Props) {
        super(props);
        this.state = {
            textToPrint: fullText,
            wordsToPrint: [],
        };
    }

    componentDidMount() {
        this.startPrinting();
    }

    componentWillUnmount() {
        this.stopPrinting();
    }

    startPrinting = () => {
        this.printInterval = setInterval(() => this.setState(
            (state: State) => {
                const { textToPrint, wordsToPrint } = state;
                const symbol = textToPrint[0];

                if (!symbol) {
                    this.stopPrinting();

                    return state;
                }

                const newWordsToPrint = wordsToPrint.slice();
                const beforeLastWord = newWordsToPrint[newWordsToPrint.length - 2] || '';
                const lastWord = newWordsToPrint[newWordsToPrint.length - 1] || '';
                const isComment = isCommentLine(lastWord);
                const isHtmlOpenTag = !isComment && isHtmlOpenTagWord(lastWord);
                const isHtmlCloseTag = !isComment && isHtmlCloseTagWord(lastWord);
                const isSpaceSymbol = !isComment && isSpace(symbol);
                const isSpecialSymbol = !isComment && isSpecialSmbl(symbol);
                const isSpecialWord = !isComment && isSpecialSmbl(lastWord);
                const isSpaceWord = !isComment && isSpace(lastWord);
                let wordType;

                if (lastWord && typeof lastWord === 'string' && (isSpecialSymbol || isSpaceSymbol)) {
                    wordType = !isSpaceWord && getWordType(lastWord);
                }

                if (isComment && symbol === '\n') {
                    wordType = 'comment';
                }

                if ((isHtmlOpenTag && isSpaceSymbol) || (isHtmlCloseTag && beforeLastWord !== '=')) {
                    wordType = 'htmlTag';
                }

                if (wordType) {
                    newWordsToPrint[newWordsToPrint.length - 1] = (
                        <span key={newWordsToPrint.length - 1} className={wordType}>
                            {lastWord}
                        </span>
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

    stopPrinting = () => this.printInterval && clearInterval(this.printInterval);

    render() {
        const { blur } = this.props;
        const { wordsToPrint } = this.state;

        return (
            <div className={classNames('CodeBackground', { blur })}>
                <div className="CodeBackground-PaddingWrap">
                    {wordsToPrint}
                </div>
            </div>
        );
    }
}
