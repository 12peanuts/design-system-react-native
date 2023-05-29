import React from 'react';
import { FlatList, FlatListProps, ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';
import { ChipItem, ChipData, ChipItemStyleProps } from './ChipItem';
import { ChipsProvider, useChipsContext } from './ChipsProvider';
import { ChipsContainer } from './Chips.styles';

export interface ChipsProps<T> extends Omit<FlatListProps<T>, 'renderItem'> {
    spacing?: number;
    onSelectionChanged?: (item: T) => void;
    containerStyle?: StyleProp<ViewStyle>;
    chipItemStyle?: ChipItemStyleProps;
}

function Chips<T extends ChipData>({
    data,
    spacing = 8,
    chipItemStyle,
    containerStyle,
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
                label={item.label}
                iconSrc={item.iconSrc}
                key={index}
                selected={selectedIdx === index}
                onPress={handlePress}
                style={{ marginLeft }}
                {...chipItemStyle}
            />
        );
    };

    return (
        <ChipsContainer style={containerStyle}>
            <FlatList
                horizontal
                bounces={false}
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={renderItem}
                {...props}
            />
        </ChipsContainer>
    );
}

function WrappedChips<T extends ChipData>(props: ChipsProps<T>) {
    return (
        <ChipsProvider>
            <Chips {...props} />
        </ChipsProvider>
    );
}

export { WrappedChips as Chips };
