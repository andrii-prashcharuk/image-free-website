declare module '*.txt' {
    const value: string;
    export default value;
}

declare type AxiosSagaResult<T> = { data: T };
