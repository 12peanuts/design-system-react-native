import React, { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

interface TabsContextState {
    activeId: number;
    updateActiveId: (index: number) => void;
}

const TabsContext = createContext<TabsContextState | null>(null);

export function TabsProvider({ children }: PropsWithChildren<unknown>) {
    const [activeId, setActiveId] = useState(0);
    const values = useMemo(
        () => ({
            activeId,
            updateActiveId(id: number) {
                if (activeId !== id) {
                    setActiveId(id);
                }
            },
        }),
        [activeId],
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
