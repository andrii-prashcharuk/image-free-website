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
];

const specialSymbolsHighlighted = [
    ';',
    ',',
];

export type WordType =
    'Comment' |
    'HtmlTag' |
    'KeyWord' |
    'Quoted' |
    'br';

export type Word = string | {
    type: WordType,
    key: string | number,
    text?: string,
};

export const isSpace = (str: Word): boolean => typeof str === 'string' && (/\s/).test(str);
export const isQuotedWord = (str: Word): boolean => typeof str === 'string' && (/'(.*?)'|"(.*?)"|`(.*?)`/).test(str);
export const isSpecialSmbl = (str: Word): boolean => typeof str === 'string' && specialSymbols.includes(str);
export const isCommentLine = (str: Word): boolean => typeof str === 'string' && (
    str === '//' || str.indexOf('//') === 0 || str.indexOf('/**') === 0
);
export const isHtmlOpenTagWord = (str: Word): boolean => typeof str === 'string' && (str.indexOf('<') === 0);
export const isHtmlCloseTagWord = (str: Word): boolean => typeof str === 'string' && (str === '>' || str === '/>');
export const getWordType = (word: string): WordType | null => {
    if (keyWords.includes(word) || specialSymbolsHighlighted.includes(word)) {
        return 'KeyWord';
    }
    if (isQuotedWord(word)) {
        return 'Quoted';
    }
    return null;
};
