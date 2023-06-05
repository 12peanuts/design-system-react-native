import React, {
    PropsWithChildren,
    createContext,
    useContext,
    useMemo,
    useRef,
    useState,
} from 'react';
import { ToastBehaviorContext } from './ToastBehaviorContext';
import { ToastAnimationProvider } from './ToastAnimationProvider';
import { Toast, ToastProps } from './Toast';

export interface ToastContextState {
    showToast: (props: ToastProps) => void;
}

const ToastContext = createContext<ToastContextState | null>(null);

export function ToastProvider({ children }: PropsWithChildren<unknown>) {
    const [showFlag, setShowFlag] = useState(false);
    const [toastMessage, setToastMessage] =
        useState<ToastProps['message']>('Please set your message');
    const [messsageProps, setMessageProps] = useState<ToastProps['messageTextProps']>(undefined);
    const [toastType, setToastType] = useState<ToastProps['type']>('contained');
    const [toastColor, setToastColor] = useState<ToastProps['color']>(undefined);
    const [toastIcon, setToastIcon] = useState<ToastProps['icon']>(undefined);
    const [actionIcon, setActionIcon] = useState<ToastProps['actionIcon']>(undefined);
    const [spacing, setSpacing] = useState<ToastProps['spacing']>(undefined);
    const callback = useRef<ToastProps['onPress']>();

    const toastContextValues = useMemo(
        () => ({
            showToast({
                message,
                messageTextProps,
                type,
                color,
                icon,
                actionIcon: _actionIcon,
                spacing: _spacing,
                onPress,
            }: ToastProps) {
                if (message !== toastMessage) setToastMessage(message);
                if (messageTextProps) setMessageProps(messageTextProps);
                if (type) setToastType(type);
                if (color) setToastColor(color);
                if (icon) setToastIcon(icon);
                if (_actionIcon) setActionIcon(_actionIcon);
                if (_spacing) setSpacing(_spacing);
                if (onPress) callback.current = onPress;
                setShowFlag((prev) => !prev);
            },
        }),
        [callback, toastMessage],
    );
    const toastBehaviorContextValues = useMemo(() => ({ showFlag }), [showFlag]);

    return (
        <ToastContext.Provider value={toastContextValues}>
            <ToastBehaviorContext.Provider value={toastBehaviorContextValues}>
                <ToastAnimationProvider>
                    {children}
                    <Toast
                        message={toastMessage}
                        messageTextProps={messsageProps}
                        type={toastType}
                        color={toastColor}
                        icon={toastIcon}
                        actionIcon={actionIcon}
                        spacing={spacing}
                        onPress={callback.current}
                    />
                </ToastAnimationProvider>
            </ToastBehaviorContext.Provider>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (context === null) {
        throw new Error('useToastContext must be used within a ToastContext');
    }
    return context;
}
