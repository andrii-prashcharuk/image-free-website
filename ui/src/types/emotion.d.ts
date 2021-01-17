import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme extends Record<string, any> {
        color: {
            black: string,
            darkGray: string,
            white: string,
            lightBlue: string,
            blue: string,
            darkBlue: string,
            brightRed: string,
            red: string,
        }
    }
}
