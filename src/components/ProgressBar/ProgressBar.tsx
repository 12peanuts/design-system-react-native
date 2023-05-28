import React, { useEffect } from 'react';
import { useTheme } from '@emotion/react';
import { Layout, LayoutProps, Text, TextProps } from '@12peanuts/design-system-react-native';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Progress, ProgressContainer, ProgressFullArea } from './styles';

export interface ProgressBarProps extends LayoutProps {
    value: number;
    strokeHeight?: number;
    textProps?: TextProps;
    backgroundColor?: string;
    color?: string;
    animated?: boolean;
    animationDuration?: number;
    withLabel?: boolean;
    fractionDigits?: number;
}

export function ProgressBar({
    value,
    strokeHeight = 7,
    backgroundColor,
    color,
    textProps,
    animated = true,
    animationDuration = 500,
    withLabel = true,
    fractionDigits = 0,
    ...props
}: ProgressBarProps) {
    const { colors } = useTheme();
    const percentage = value * 100;
    const scaleX = useSharedValue(animated ? 0 : percentage);
    const animStyle = useAnimatedStyle(() => ({
        width: withTiming(`${scaleX.value}%`, { duration: animationDuration }),
    }));

    useEffect(() => {
        scaleX.value = percentage;
    }, []);

    return (
        <Layout orientation="horizontal" {...props}>
            <ProgressContainer>
                <ProgressFullArea backgroundColor={backgroundColor || colors.gray300}>
                    <Progress
                        strokeHeight={strokeHeight}
                        color={color || colors.primary}
                        style={animStyle}
                    />
                </ProgressFullArea>
            </ProgressContainer>
            {withLabel && (
                <Text varient="subtitle1" color={colors.text300} {...textProps}>
                    {`${percentage.toFixed(fractionDigits)}%`}
                </Text>
            )}
        </Layout>
    );
}
