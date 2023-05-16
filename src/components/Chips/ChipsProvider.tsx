import React, { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

interface ChipsContextState {
    selectedIdx: number;
    updateSelectedIdx: (idx: number) => void;
}

const ChipsContext = createContext<ChipsContextState | null>(null);

export function ChipsProvider({ children }: PropsWithChildren<unknown>) {
    const [selectedIdx, updateSelectedIdx] = useState(0);

    const values = useMemo(
        () => ({
            selectedIdx,
            updateSelectedIdx,
        }),
        [selectedIdx],
    );

    return <ChipsContext.Provider value={values}>{children}</ChipsContext.Provider>;
}

export function useChipsContext() {
    const context = useContext(ChipsContext);
    if (context === null) {
        throw new Error('useChipsContext must be used within a ChipsContext');
    }
    return context;
}
