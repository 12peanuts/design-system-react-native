import React, { PropsWithChildren, createContext, useContext, useMemo } from 'react';

export interface TabsContextState {
    tabMenuType: 'underline' | 'solid';
    tabMenuDisplay: 'flex' | 'inline';
    activeColor: string;
}

const TabsContext = createContext<TabsContextState | null>(null);

export function TabsProvider({
    children,
    tabMenuType,
    tabMenuDisplay,
    activeColor,
}: TabsContextState & PropsWithChildren<unknown>) {
    const values = useMemo(
        () => ({ tabMenuType, tabMenuDisplay, activeColor }),
        [tabMenuDisplay, tabMenuType, activeColor],
    );

    return <TabsContext.Provider value={values}>{children}</TabsContext.Provider>;
}

export function useTabsContext() {
    const context = useContext(TabsContext);
    if (context === null) {
        throw new Error('useTabsContext must be used within a TabsContext');
    }
    return context;
}
