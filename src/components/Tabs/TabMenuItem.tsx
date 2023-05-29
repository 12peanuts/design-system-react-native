import React from 'react';
import { useTheme } from '@emotion/react';
import { GestureResponderEvent, TouchableOpacityProps, ViewStyle } from 'react-native';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { useTabsContext } from './TabsProvider';
import { useScrollContext } from './ScrollProvider';
import { useLayoutContext } from './LayoutProvider';
import { ActiveBar, TabItemButton } from './TabItem.styles';
import { Text, TextProps } from '../Text';

export interface TabMenuItemProps {
    label: string;
    index: number;
    textProps?: TextProps;
    textColor?: string;
    textActiveColor?: string;
    activeBarStyle?: ViewStyle;
    hideActiveBar?: boolean;
}

export function TabMenuItem({
    label,
    index = 0,
    activeOpacity = 0.8,
    onPress,
    textProps,
    activeBarStyle,
    textColor,
    textActiveColor,
    hideActiveBar = false,
    ...props
}: TabMenuItemProps & Omit<TouchableOpacityProps, 'index'>) {
    const { colors } = useTheme();
    const { activeIndex, updateActiveIndex } = useTabsContext();
    const { scrollTo } = useScrollContext();
    const { layout } = useLayoutContext();
    const isActive = activeIndex === index;
    const animStyle = useAnimatedStyle(() => ({
        transform: [
            {
                scaleX: withSpring(isActive ? 1 : 0, {
                    overshootClamping: true,
                }),
            },
        ],
    }));

    const handlePress = (event: GestureResponderEvent) => {
        updateActiveIndex(index);
        scrollTo({ x: index * layout.width, animated: false });
        if (onPress) onPress(event);
    };

    return (
        <TabItemButton activeOpacity={activeOpacity} onPress={handlePress} {...props}>
            <Text
                varient="subtitle1"
                isBold={isActive}
                color={isActive ? textActiveColor || colors.primary : textColor || colors.text100}
                {...textProps}
            >
                {label}
            </Text>
            {!hideActiveBar && isActive && <ActiveBar style={[animStyle, activeBarStyle]} />}
        </TabItemButton>
    );
}
