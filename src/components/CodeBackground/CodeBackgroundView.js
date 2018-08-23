// @flow
/* eslint-disable react/no-unused-state */
/* globals IntervalID: true */
import React from 'react';
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

const isSpace = (str: string | Node): boolean => typeof str === 'string' && (/\s/).test(str);
const getWordType = (word: string): string | null => {
    if (keyWords.includes(word)) {
        return 'keyWord';
    }
    return null;
};

type Props = {
    colorScheme: 'light' | 'dark',
};

type State = {
    textToPrint: string,
    wordsToPrint: (Node | string)[],
};

export default class CodeBackground extends React.Component<Props, State> {
    state: State = {
        textToPrint: fullText,
        wordsToPrint: [],
    };
    componentDidMount() {
        this.startPrinting();
    }
    componentWillUnmount() {
        this.stopPrinting();
    }
    props: Props;
    printInterval: IntervalID | null = null;
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
                const lastWord = newWordsToPrint[newWordsToPrint.length - 1] || '';
                const isSpaceSymbol = isSpace(symbol);
                const isSpaceWord = isSpace(lastWord);

                if (symbol === '\n') {
                    newWordsToPrint.push(<br key={newWordsToPrint.length} />);
                } else if (!lastWord || typeof lastWord !== 'string') {
                    newWordsToPrint.push(symbol);
                } else if ((isSpaceSymbol && isSpaceWord) || (!isSpaceSymbol && !isSpaceWord)) {
                    newWordsToPrint[newWordsToPrint.length - 1] = lastWord + symbol;
                } else {
                    const wordType = !isSpaceWord && getWordType(lastWord);

                    if (wordType) {
                        newWordsToPrint[newWordsToPrint.length - 1] = (
                            <span key={newWordsToPrint.length} className={wordType}>
                                {lastWord}
                            </span>
                        );
                    }
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
    render = () => (
        <div className={`CodeBackground ${this.props.colorScheme}`}>
            <div className="CodeBackground-PaddingWrap">
                {this.state.wordsToPrint}
            </div>
        </div>
    );
}
