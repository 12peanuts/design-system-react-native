import React, { useState } from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';
import { TabItem } from './TabItem';
import { useTabsContext } from './TabsProvider';
import { TabsMenuContainer } from './TabsMenu.styles';

export interface TabsProps {
    data: string[];
    spacing?: number;
}

export function TabsMenu({ data, spacing: passedSpacing }: TabsProps) {
    const { tabMenuDisplay } = useTabsContext();
    const [selectedIdx, setSelectedIdx] = useState(0);
    const spacing = passedSpacing || tabMenuDisplay === 'flex' ? 0 : 6;

    const renderItem = ({ item, index }: ListRenderItemInfo<string>) => {
        const marginLeft = index > 0 ? spacing : 0;
        return (
            <TabItem
                title={item}
                key={index}
                isActive={index === selectedIdx}
                style={{ marginLeft }}
                onPress={() => setSelectedIdx(index)}
            />
        );
    };

    return (
        <TabsMenuContainer>
            {tabMenuDisplay === 'inline' ? (
                <FlatList
                    horizontal
                    bounces={false}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={renderItem}
                />
            ) : (
                data.map((title, index) => (
                    <TabItem
                        title={title}
                        key={title}
                        isActive={index === selectedIdx}
                        onPress={() => setSelectedIdx(index)}
                    />
                ))
            )}
        </TabsMenuContainer>
    );
}
