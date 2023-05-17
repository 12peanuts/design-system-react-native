import React from 'react';
import { Text, TouchableOpacityProps } from 'react-native';
import { ActiveBar, TabItemContainer } from './TabItem.styles';
import { useTabsContext } from './TabsProvider';

export interface TabItemProps extends TouchableOpacityProps {
    isActive: boolean;
    title: string;
}

export function TabItem({ title, isActive, activeOpacity = 0.8, ...props }: TabItemProps) {
    const { tabMenuType, activeColor } = useTabsContext();

    return (
        <TabItemContainer
            isActive={isActive}
            tabMenuType={tabMenuType}
            activeOpacity={activeOpacity}
            activeColor={activeColor}
            {...props}
        >
            <Text>{title}</Text>
            <ActiveBar isActive={isActive} tabMenuType={tabMenuType} activeColor={activeColor} />
        </TabItemContainer>
    );
}
