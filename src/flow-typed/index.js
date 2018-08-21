// @flow
declare module 'CSSModule' {
    declare var exports: { [key: string]: string };
}

declare module 'debounce' {
    declare export var debounce: <T: mixed[], U>((...T) => U, number) => ((...T) => U);
}
