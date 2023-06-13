import React, { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

interface AnmationOptionParams {
    offset?: number;
    delay?: number;
    duration?: number;
    direction?: 'top' | 'bottom';
    fadeEffect?: boolean;
}

export interface ToastAnimationContextState extends Required<AnmationOptionParams> {
    changeAnmationOption?: (params: AnmationOptionParams) => void;
}

const ToastAnimationContext = createContext<ToastAnimationContextState | null>(null);

export function ToastAnimationProvider({ children }: PropsWithChildren<unknown>) {
    const [offset, setOffset] = useState(100);
    const [delay, setDelay] = useState(3000);
    const [duration, setDuration] = useState(1000);
    const [direction, setDirection] = useState<ToastAnimationContextState['direction']>('bottom');
    const [fadeEffect, setFadeEffect] = useState(true);

    const values = useMemo(
        () => ({
            offset,
            delay,
            duration,
            direction,
            fadeEffect,
            changeAnmationOption(params: AnmationOptionParams) {
                if (params.offset) setOffset(params.offset);
                if (params.delay) setDelay(params.delay);
                if (params.duration) setDuration(params.duration);
                if (params.direction) setDirection(params.direction);
                if (params.fadeEffect !== undefined) setFadeEffect(params.fadeEffect);
            },
        }),
        [offset, delay, duration, direction, fadeEffect],
    );

    return (
        <ToastAnimationContext.Provider value={values}>{children}</ToastAnimationContext.Provider>
    );
}

export function useToastAnimation() {
    const context = useContext(ToastAnimationContext);
    if (context === null) {
        throw new Error('useToastAnimation must be used within a ToastAnimationContext');
    }
    return context;
}
