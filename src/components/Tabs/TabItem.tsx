import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ActiveBar, TabItemContainer } from './TabItem.styles';
import { useTabMenuContext, useTabsContext } from './TabsProvider';
import { Text } from '../Text';
import { useTheme } from '@emotion/react';

export interface TabItemProps extends TouchableOpacityProps {
    isActive: boolean;
    title: string;
}

export function TabItem({ title, isActive, activeOpacity = 0.8, ...props }: TabItemProps) {
    const { colors } = useTheme();
    const { tabMenuType, activeColor, activeBarHeight } = useTabsContext();
    const { tabMenuColor, tabMenuHorizontalPadding, tabMenuVerticalPadding, tabMenuTextProps } =
        useTabMenuContext();

    return (
        <TabItemContainer
            isActive={isActive}
            tabMenuType={tabMenuType}
            activeOpacity={activeOpacity}
            activeColor={activeColor}
            tabMenuColor={tabMenuColor}
            tabMenuHorizontalPadding={tabMenuHorizontalPadding}
            tabMenuVerticalPadding={tabMenuVerticalPadding}
            {...props}
        >
            <Text
                varient="h3"
                color={isActive ? activeColor : colors.gray500}
                {...tabMenuTextProps}
            >
                {title}
            </Text>
            <ActiveBar
                isActive={isActive}
                tabMenuType={tabMenuType}
                activeColor={activeColor}
                activeBarHeight={activeBarHeight}
            />
        </TabItemContainer>
    );
}
