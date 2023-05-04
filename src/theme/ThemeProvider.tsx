import React, { ReactNode } from 'react';
import { ThemeProvider as ThemeProviderBase } from '@emotion/react';
import { Appearance } from 'react-native';
import { DefaultTheme, getGlobalTheme } from './theme';

interface ThemeProviderProps {
    children?: ReactNode;
    theme?: DefaultTheme;
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
    const systemTheme = Appearance.getColorScheme();
    const globalTheme = getGlobalTheme(systemTheme);

    return <ThemeProviderBase theme={theme || globalTheme}>{children}</ThemeProviderBase>;
};
