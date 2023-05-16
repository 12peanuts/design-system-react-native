import React, { PropsWithChildren, useContext, useMemo } from 'react';

export interface TabsContextState {
    tabMenuType: 'underline' | 'solid';
    tabMenuDisplay: 'flex' | 'inline';
}

const TabsContext = React.createContext<TabsContextState | null>(null);

export function TabsProvider({
    children,
    tabMenuType,
    tabMenuDisplay,
}: TabsContextState & PropsWithChildren<unknown>) {
    const values = useMemo(() => ({ tabMenuType, tabMenuDisplay }), [tabMenuDisplay, tabMenuType]);

    return <TabsContext.Provider value={values}>{children}</TabsContext.Provider>;
}

export function useTabsContext() {
    const context = useContext(TabsContext);
    if (context === null) {
        throw new Error('useTabsContext must be used within a TabsContext');
    }
    return context;
}
