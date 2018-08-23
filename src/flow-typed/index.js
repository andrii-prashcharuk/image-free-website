// @flow
declare module 'CSSModule' {
    declare export default string;
}

declare module 'throttle-debounce' {
    declare export var debounce: <T: mixed[], U>(number, (...T) => U) => ((...T) => U);
    declare export var throttle: <T: mixed[], U>(number, (...T) => U) => ((...T) => U);
}
