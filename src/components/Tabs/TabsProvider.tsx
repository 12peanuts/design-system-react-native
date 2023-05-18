import React, { PropsWithChildren, createContext, useContext, useMemo } from 'react';
import { TextProps } from '../Text';
import { ScreenPaddingType } from '../../shared';

export interface TabsContextState {
    tabMenuType: 'underline' | 'solid';
    tabMenuDisplay: 'flex' | 'inline';
    activeColor: string;
    activeBarHeight: number;
}

export interface TabMenuContextState {
    tabMenuTextProps: TextProps;
    tabMenuVerticalPadding: ScreenPaddingType;
    tabMenuHorizontalPadding: ScreenPaddingType;
    tabMenuColor: string;
}

const TabsContext = createContext<TabsContextState | null>(null);
const TabMenuContext = createContext<TabMenuContextState | null>(null);

export function TabsProvider({
    children,
    tabMenuType,
    tabMenuDisplay,
    activeColor,
    activeBarHeight,
    tabMenuColor,
    tabMenuTextProps,
    tabMenuHorizontalPadding,
    tabMenuVerticalPadding,
}: TabsContextState & TabMenuContextState & PropsWithChildren<unknown>) {
    const tabContextValue = useMemo(
        () => ({ tabMenuType, tabMenuDisplay, activeColor, activeBarHeight }),
        [tabMenuDisplay, tabMenuType, activeColor, activeBarHeight],
    );
    const tabMenuContextValue = useMemo(
        () => ({
            tabMenuColor,
            tabMenuTextProps,
            tabMenuVerticalPadding,
            tabMenuHorizontalPadding,
        }),
        [tabMenuColor, tabMenuTextProps, tabMenuVerticalPadding, tabMenuHorizontalPadding],
    );

    return (
        <TabsContext.Provider value={tabContextValue}>
            <TabMenuContext.Provider value={tabMenuContextValue}>
                {children}
            </TabMenuContext.Provider>
        </TabsContext.Provider>
    );
}

export function useTabsContext() {
    const context = useContext(TabsContext);
    if (context === null) {
        throw new Error('useTabsContext must be used within a TabsContext');
    }
    return context;
}

export function useTabMenuContext() {
    const context = useContext(TabMenuContext);
    if (context === null) {
        throw new Error('useTabMenuContext must be used within a TabMenuContext');
    }
    return context;
}
