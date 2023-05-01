import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            inactive: string;
            background: string;
            text100: string;
            text200: string;
            text300: string;
            gray100: string;
            gray150: string;
            gray200: string;
            gray300: string;
            gray350: string;
            gray400: string;
            gray500: string;
            gray600: string;
            gray700: string;
            gray800: string;
            gray900: string;
            white: string;
            black: string;
            error: string;
        };
        typography: {
            h1: {
                fontSize: string;
                fontWeight: number;
            };
            h2: {
                fontSize: string;
                fontWeight: number;
            };
            h3: {
                fontSize: string;
                fontWeight: number;
            };
            h4: {
                fontSize: string;
                fontWeight: number;
            };
            h5: {
                fontSize: string;
                fontWeight: number;
            };
            h6: {
                fontSize: string;
                fontWeight: number;
            };
            subtitle1: {
                fontSize: string;
                fontWeight: number;
            };
            subtitle2: {
                fontSize: string;
                fontWeight: number;
            };
            body1: {
                fontSize: string;
                fontWeight: number;
            };
            body2: {
                fontSize: string;
                fontWeight: number;
            };
            caption: {
                fontSize: string;
                fontWeight: number;
            };
        };
        fontFamily: {
            en: {
                regular: string;
                medium: string;
                bold: string;
            };
            ko: {
                regular: string;
                medium: string;
                bold: string;
            };
        };
        size: {
            width: number;
            height: number;
        };
    }
}
