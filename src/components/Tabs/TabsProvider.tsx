import React, { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

export interface TabsProviderProps {
    onActiveTabChanged?: (index: number) => void;
}

interface TabsContextState {
    activeIndex: number;
    updateActiveIndex: (index: number) => void;
}

const TabsContext = createContext<TabsContextState | null>(null);

export function TabsProvider({
    onActiveTabChanged,
    children,
}: PropsWithChildren<TabsProviderProps>) {
    const [activeIndex, setActiveIndex] = useState(0);
    const values = useMemo(
        () => ({
            activeIndex,
            updateActiveIndex(index: number) {
                if (activeIndex !== index) {
                    setActiveIndex(index);
                    if (onActiveTabChanged) onActiveTabChanged(index);
                }
            },
        }),
        [activeIndex, onActiveTabChanged],
    );

    return <TabsContext.Provider value={values}>{children}</TabsContext.Provider>;
}

export function useTabsContext() {
    const context = useContext(TabsContext);
    if (context === null) {
        throw new Error('useTabsContext must be used within a TabContext');
    }
    return context;
}
