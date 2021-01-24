import { useEffect, useState } from 'react';
import {
    isCommentLine,
    isHtmlOpenTagWord,
    isHtmlCloseTagWord,
    isSpace,
    isSpecialSmbl,
    getWordType,
} from './utils';
import type { Word, WordType } from './utils';

export const usePrintedWords = (fullText: string): Word[] => {
    const [textToPrint, setTextToPrint] = useState(fullText);
    const [wordsToPrint, setWordsToPrint] = useState<Word[]>([]);

    useEffect(() => {
        const printTimeout = setTimeout(() => {
            const symbol = textToPrint[0];

            if (!symbol) {
                return;
            }

            const newWordsToPrint: Word[] = wordsToPrint.slice();
            const beforeLastWord = newWordsToPrint[newWordsToPrint.length - 2] || '';
            const lastWord = newWordsToPrint[newWordsToPrint.length - 1] || '';
            const isComment = isCommentLine(lastWord);
            const isHtmlOpenTag = !isComment && isHtmlOpenTagWord(lastWord);
            const isHtmlCloseTag = !isComment && isHtmlCloseTagWord(lastWord);
            const isSpaceSymbol = !isComment && isSpace(symbol);
            const isSpecialSymbol = !isComment && isSpecialSmbl(symbol);
            const isSpecialWord = !isComment && isSpecialSmbl(lastWord);
            const isSpaceWord = !isComment && isSpace(lastWord);
            let wordType: WordType | null = null;

            if (lastWord
                && typeof lastWord === 'string'
                && (isSpecialSymbol || isSpaceSymbol)
                && !isSpaceWord
            ) {
                wordType = getWordType(lastWord);
            }

            if (isComment && symbol === '\n') {
                wordType = 'Comment';
            }

            if ((isHtmlOpenTag && isSpaceSymbol) || (isHtmlCloseTag && beforeLastWord !== '=')) {
                wordType = 'HtmlTag';
            }

            if (wordType && typeof lastWord === 'string') {
                newWordsToPrint[newWordsToPrint.length - 1] = {
                    type: wordType,
                    key: newWordsToPrint.length - 1,
                    text: lastWord,
                };
            }

            if (symbol === '\n') {
                newWordsToPrint.push({
                    type: 'br',
                    key: newWordsToPrint.length,
                });
            } else if (!lastWord || typeof lastWord !== 'string' || isSpecialSymbol || isSpecialWord) {
                newWordsToPrint.push(symbol);
            } else if ((isSpaceSymbol && isSpaceWord) || (!isSpaceSymbol && !isSpaceWord)) {
                newWordsToPrint[newWordsToPrint.length - 1] = lastWord + symbol;
            } else {
                newWordsToPrint.push(symbol);
            }

            setTextToPrint(textToPrint.slice(1));
            setWordsToPrint(newWordsToPrint);
        }, 75);

        return () => clearTimeout(printTimeout);
    }, [textToPrint, wordsToPrint]);

    return wordsToPrint;
};
