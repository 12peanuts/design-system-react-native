import React, { ReactNode } from 'react';
import { Appearance } from 'react-native';
import { Theme, ThemeProvider as ThemeProviderBase } from '@emotion/react';
import { getGlobalTheme } from './theme';

interface ThemeProviderProps {
    children?: ReactNode;
    theme?: Theme;
}

export const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
    const systemTheme = Appearance.getColorScheme();
    const globalTheme = getGlobalTheme(systemTheme);

    return <ThemeProviderBase theme={theme || globalTheme}>{children}</ThemeProviderBase>;
};
