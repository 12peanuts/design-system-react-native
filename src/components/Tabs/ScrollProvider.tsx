import React, {
    PropsWithChildren,
    createContext,
    useCallback,
    useContext,
    useMemo,
    useRef,
} from 'react';
import Animated from 'react-native-reanimated';

interface ScrollContextState {
    scrollRef: React.RefObject<Animated.ScrollView>;
    scrollTo: (params: { x?: number; y?: number; animated?: boolean }) => void;
}

const ScrollContext = createContext<ScrollContextState | null>(null);

export function ScrollProvider({ children }: PropsWithChildren<unknown>) {
    const scrollRef = useRef<Animated.ScrollView>(null);

    const scrollTo = useCallback((params: { x?: number; y?: number; animated?: boolean }) => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo(params);
        }
    }, []);

    const values = useMemo(
        () => ({
            scrollRef,
            scrollTo,
        }),
        [scrollTo],
    );

    return <ScrollContext.Provider value={values}>{children}</ScrollContext.Provider>;
}

export function useScrollContext() {
    const context = useContext(ScrollContext);
    if (context === null) {
        throw new Error('useScrollContext must be used within a ScrollContext');
    }
    return context;
}
