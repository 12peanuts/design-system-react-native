import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';
import { TabItemContainer } from './TabItem.styles';
// import { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { useTabsContext } from './TabsProvider';

export interface TabItemProps extends TouchableOpacityProps {
    isActive: boolean;
    title: string;
}

export function TabItem({ title, isActive, activeOpacity = 0.8, ...props }: TabItemProps) {
    const { tabMenuType } = useTabsContext();
    // const width = useSharedValue(0);
    // const style = useAnimatedStyle(() => ({
    //     width: `${width.value}%`,
    // }));

    // useEffect(() => {
    //     width.value = withSpring(width.value === 100 ? 0 : 100);
    // }, [isActive, width]);

    return (
        <TabItemContainer
            isActive={isActive}
            tabMenuType={tabMenuType}
            activeOpacity={activeOpacity}
            {...props}
        >
            <Text>{title}</Text>
            {/* <ActiveBorder isActive={isActive} tabMenuType={tabMenuType} /> */}
        </TabItemContainer>
    );
}
