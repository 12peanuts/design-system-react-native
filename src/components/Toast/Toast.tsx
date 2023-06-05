import React, { useEffect, useState } from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { Layout, TextProps } from '@12peanuts/design-system-react-native';
import { useAnimatedStyle, withDelay, withSequence, withTiming } from 'react-native-reanimated';
import { useToastBehaviorContext } from './ToastBehaviorContext';
import { useToastAnimation } from './ToastAnimationProvider';
import { StyledPressable, ToastView, WrappedText } from './styles';
import { useTheme } from '@emotion/react';

export interface ToastProps {
    message: string;
    color?: string;
    spacing?: number;
    type?: 'contained' | 'outlined';
    messageTextProps?: TextProps;
    icon?: ImageSourcePropType;
    actionIcon?: ImageSourcePropType;
    onPress?: () => void;
}

export function Toast({
    type,
    color,
    message,
    messageTextProps,
    icon,
    actionIcon,
    spacing,
    onPress,
}: ToastProps) {
    const { colors } = useTheme();
    const { showFlag } = useToastBehaviorContext();
    const { offset, delay, duration, direction, fadeEffect } = useToastAnimation();
    const [mounted, setMounted] = useState(false);

    const animStyle = useAnimatedStyle(() => {
        const animation = (from: number, to: number) =>
            withSequence(
                withTiming(from, { duration }),
                withDelay(delay, withTiming(to, { duration })),
            );

        return {
            [direction.toString()]: mounted ? animation(offset, -offset) : -offset,
            opacity: animation(1, fadeEffect ? 0 : 1),
        };
    }, [showFlag]);

    useEffect(() => setMounted(true), []);

    return (
        <ToastView style={animStyle}>
            <StyledPressable type={type} color={color} spacing={spacing} onPress={onPress}>
                <Layout orientation="horizontal" spacing={spacing} flex={1}>
                    {icon && <Image source={icon} />}
                    <WrappedText color={colors.text100} numberOfLines={2} {...messageTextProps}>
                        {message}
                    </WrappedText>
                </Layout>
                {actionIcon && <Image source={actionIcon} />}
            </StyledPressable>
        </ToastView>
    );
}
