import React, {
    Children,
    PropsWithChildren,
    ReactElement,
    isValidElement,
    useMemo,
    useState,
} from 'react';
import { LayoutChangeEvent, ScrollView, View } from 'react-native';
import { Layout } from '@12peanuts/design-system-react-native';
import { TabsMenu } from './TabsMenu';
import { TabsContextState, TabsProvider } from './TabsProvider';

export interface TabsProps extends PropsWithChildren<unknown> {
    tabMenuNames?: string[];
    tabMenuType?: TabsContextState['tabMenuType'];
    tabMenuDisplay?: TabsContextState['tabMenuDisplay'];
}

export function Tabs({
    tabMenuType = 'underline',
    tabMenuDisplay = 'inline',
    tabMenuNames = [],
    children: passedChildren,
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
                    <View key={title} style={{ width, aspectRatio: 1 / 1 }}>
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
        <TabsProvider tabMenuType={tabMenuType} tabMenuDisplay={tabMenuDisplay}>
            <Layout onLayout={handleLayout}>
                <TabsMenu data={menuNames} />
                <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
                    {children}
                </ScrollView>
            </Layout>
        </TabsProvider>
    );
}
