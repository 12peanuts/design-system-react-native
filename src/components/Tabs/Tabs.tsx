import React, { Children, ReactElement, isValidElement, useMemo, useState } from 'react';
import { LayoutChangeEvent, ScrollView, ScrollViewProps, View } from 'react-native';
import { TabsMenu } from './TabsMenu';
import { TabsContainer } from './Tabs.styles';
import { TabMenuContextState, TabsContextState, TabsProvider } from './TabsProvider';

export interface TabsProps extends ScrollViewProps {
    tabMenuNames?: string[];
    tabMenuType?: TabsContextState['tabMenuType'];
    tabMenuDisplay?: TabsContextState['tabMenuDisplay'];
    activeColor?: TabsContextState['activeColor'];
    activeBarHeight?: TabsContextState['activeBarHeight'];
    tabMenuTextProps?: TabMenuContextState['tabMenuTextProps'];
    tabMenuColor?: TabMenuContextState['tabMenuColor'];
    tabMenuVerticalPadding?: TabMenuContextState['tabMenuVerticalPadding'];
    tabMenuHorizontalPadding?: TabMenuContextState['tabMenuHorizontalPadding'];
}

export function Tabs({
    tabMenuType = 'underline',
    tabMenuDisplay = 'inline',
    tabMenuNames = [],
    activeColor = 'black',
    activeBarHeight = 1.5,
    children: passedChildren,
    tabMenuTextProps = { varient: 'h4' },
    tabMenuColor = '#fff',
    tabMenuVerticalPadding = 'Medium',
    tabMenuHorizontalPadding = 'Medium',
    ...props
}: TabsProps) {
    const [width, setWidth] = useState(0);
    const { children, menuNames } = useMemo(() => {
        const overwrittenNames = tabMenuNames;
        const elements = Children.toArray(passedChildren)
            .filter((element) => isValidElement(element))
            .map((element, index) => {
                const title = overwrittenNames[index] || `untitled${index + 1}`;
                overwrittenNames[index] = title;
                const reactElement = element as ReactElement;
                return (
                    <View key={title} style={{ width }}>
                        {reactElement}
                    </View>
                );
            });

        return { children: elements, menuNames: overwrittenNames };
    }, [passedChildren, width, tabMenuNames]);

    const handleLayout = (event: LayoutChangeEvent) => {
        setWidth(event.nativeEvent.layout.width);
    };

    return (
        <TabsProvider
            tabMenuType={tabMenuType}
            tabMenuDisplay={tabMenuDisplay}
            activeColor={activeColor}
            activeBarHeight={activeBarHeight}
            tabMenuTextProps={tabMenuTextProps}
            tabMenuVerticalPadding={tabMenuVerticalPadding}
            tabMenuHorizontalPadding={tabMenuHorizontalPadding}
            tabMenuColor={tabMenuColor}
        >
            <TabsContainer onLayout={handleLayout}>
                <TabsMenu data={menuNames} />
                <ScrollView
                    horizontal
                    pagingEnabled
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    {...props}
                >
                    {children}
                </ScrollView>
            </TabsContainer>
        </TabsProvider>
    );
}
