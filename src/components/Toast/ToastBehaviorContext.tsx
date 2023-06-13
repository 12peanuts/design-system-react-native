import { createContext, useContext } from 'react';

export interface ToastBehaviorContextState {
    showFlag: boolean;
}

export const ToastBehaviorContext = createContext<ToastBehaviorContextState | null>(null);

export function useToastBehaviorContext() {
    const context = useContext(ToastBehaviorContext);
    if (context === null) {
        throw new Error('useToastBehaviorContext must be used within a ToastBehaviorContext');
    }
    return context;
}
