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
    id: number;
    textProps?: TextProps;
    textColor?: string;
    textActiveColor?: string;
    activeBarStyle?: ViewStyle;
}

export function TabMenuItem({
    label,
    id = 0,
    activeOpacity = 0.8,
    onPress,
    textProps,
    activeBarStyle,
    textColor,
    textActiveColor,
    ...props
}: TabMenuItemProps & Omit<TouchableOpacityProps, 'id'>) {
    const { colors } = useTheme();
    const { activeId, updateActiveId } = useTabsContext();
    const { scrollTo } = useScrollContext();
    const { layout } = useLayoutContext();
    const isActive = activeId === id;
    const animStyle = useAnimatedStyle(() => ({
        transform: [
            {
                scaleX: withSpring(isActive ? 1 : 0),
            },
        ],
    }));

    const handlePress = (event: GestureResponderEvent) => {
        updateActiveId(id);
        scrollTo({ x: id * layout.width, animated: false });
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
            {isActive && <ActiveBar style={[animStyle, activeBarStyle]} />}
        </TabItemButton>
    );
}
