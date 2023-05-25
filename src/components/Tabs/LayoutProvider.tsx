import React, { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

interface LayoutContextState {
    layout: LayoutRectangle;
    handleLayout: (event: LayoutChangeEvent) => void;
}

const LayoutContext = createContext<LayoutContextState | null>(null);

export function LayoutProvider({ children }: PropsWithChildren<unknown>) {
    const [layout, setLayout] = useState<LayoutRectangle>({ x: 0, y: 0, width: 0, height: 0 });
    const values = useMemo(
        () => ({
            layout,
            handleLayout(event: LayoutChangeEvent) {
                setLayout(event.nativeEvent.layout);
            },
        }),
        [layout],
    );

    return <LayoutContext.Provider value={values}>{children}</LayoutContext.Provider>;
}

export function useLayoutContext() {
    const context = useContext(LayoutContext);
    if (context === null) {
        throw new Error('useLayoutContext must be used within a LayoutContext');
    }
    return context;
}
