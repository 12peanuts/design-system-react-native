import React from 'react';
import { FlatList, FlatListProps, ListRenderItemInfo } from 'react-native';
import { Layout } from '@12peanuts/design-system-react-native';
import { ChipItem, ChipItemProps } from './ChipItem';
import { ChipsProvider, useChipsContext } from './ChipsProvider';

export interface ChipsProps<T> extends Omit<FlatListProps<T>, 'renderItem'> {
    spacing?: number;
    onSelectionChanged?: (item: T) => void;
    type?: ChipItemProps['type'];
}

function Chips<T extends ChipItemProps>({
    type,
    data,
    spacing = 8,
    onSelectionChanged,
    ...props
}: ChipsProps<T>) {
    const { selectedIdx, updateSelectedIdx } = useChipsContext();

    const renderItem = ({ item, index }: ListRenderItemInfo<T>) => {
        const marginLeft = index > 0 ? spacing : 0;
        const handlePress = () => {
            updateSelectedIdx(index);
            if (onSelectionChanged) onSelectionChanged(item);
        };

        return (
            <ChipItem
                type={type}
                key={index}
                selected={selectedIdx === index}
                onPress={handlePress}
                style={{ marginLeft }}
                {...item}
            />
        );
    };

    return (
        <Layout paddingTop="Medium" paddingBottom="Medium">
            <FlatList
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                {...props}
            />
        </Layout>
    );
}

function WrappedChips<T extends ChipItemProps>(props: ChipsProps<T>) {
    return (
        <ChipsProvider>
            <Chips {...props} />
        </ChipsProvider>
    );
}

export { WrappedChips as Chips };
