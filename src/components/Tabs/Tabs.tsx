import React, { Children, ReactElement, isValidElement, useMemo } from 'react';
import Animated from 'react-native-reanimated';
import {
    NativeScrollEvent,
    NativeSyntheticEvent,
    ScrollViewProps,
    StyleProp,
    View,
    ViewStyle,
} from 'react-native';
import { TabMenuItem, TabMenuItemProps } from './TabMenuItem';
import { TabsProvider, TabsProviderProps, useTabsContext } from './TabsProvider';
import { ScrollProvider, useScrollContext } from './ScrollProvider';
import { LayoutProvider, useLayoutContext } from './LayoutProvider';
import { MenuContainer } from './Tabs.styles';

export type TabData = Pick<TabMenuItemProps, 'label'>;
export interface TabsProps<T> extends ScrollViewProps {
    data: T[];
    gap?: number;
    tabMenuContainerStyle?: StyleProp<ViewStyle>;
    activeBarStyle?: TabMenuItemProps['activeBarStyle'];
    tabMenuLabelProps?: TabMenuItemProps['textProps'];
    tabMenuLabelActiveColor?: TabMenuItemProps['textActiveColor'];
    tabMenuLabelColor?: TabMenuItemProps['textColor'];
    onActiveTabChanged?: TabsProviderProps['onActiveTabChanged'];
    hideActiveBar?: TabMenuItemProps['hideActiveBar'];
}

function TabsMain<T extends TabData>({
    data,
    gap = 0,
    children: passedChildren,
    tabMenuContainerStyle,
    activeBarStyle,
    tabMenuLabelProps,
    tabMenuLabelActiveColor,
    tabMenuLabelColor,
    hideActiveBar = false,
    ...props
}: TabsProps<T>) {
    const { layout, handleLayout } = useLayoutContext();
    const { scrollRef } = useScrollContext();
    const { updateActiveIndex } = useTabsContext();
    const children = useMemo(() => {
        const elements = Children.toArray(passedChildren)
            .filter((element) => isValidElement(element))
            .map((element, index) => {
                const reactElement = element as ReactElement;
                return (
                    <View
                        key={data[index]?.label || `undefined-${index}`}
                        style={{ width: layout.width }}
                    >
                        {reactElement}
                    </View>
                );
            });
        return elements;
    }, [data, layout.width, passedChildren]);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const pageIndex = Math.round(event.nativeEvent.contentOffset.x / layout.width);
        updateActiveIndex(pageIndex);
    };

    return (
        <View>
            <MenuContainer style={tabMenuContainerStyle}>
                {data.map(({ label }, index) => (
                    <TabMenuItem
                        label={label}
                        index={index}
                        key={label}
                        activeBarStyle={activeBarStyle}
                        textProps={tabMenuLabelProps}
                        textActiveColor={tabMenuLabelActiveColor}
                        textColor={tabMenuLabelColor}
                        hideActiveBar={hideActiveBar}
                    />
                ))}
            </MenuContainer>
            <Animated.ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ gap }}
                scrollEventThrottle={16}
                onScroll={handleScroll}
                onLayout={handleLayout}
                {...props}
            >
                {children}
            </Animated.ScrollView>
        </View>
    );
}

export function Tabs<T extends TabData>({ onActiveTabChanged, ...props }: TabsProps<T>) {
    return (
        <TabsProvider onActiveTabChanged={onActiveTabChanged}>
            <ScrollProvider>
                <LayoutProvider>
                    <TabsMain {...props} />
                </LayoutProvider>
            </ScrollProvider>
        </TabsProvider>
    );
}
