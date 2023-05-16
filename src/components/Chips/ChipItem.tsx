import React from 'react';
import { useTheme } from '@emotion/react';
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { Text, TextProps } from '@12peanuts/design-system-react-native';
import { ChipItemContainer, WrappedImage } from './ChipItem.styles';
import { ComponentType, RadiusType } from '../../shared';

export interface ChipItemProps extends TouchableOpacityProps {
    text?: string;
    radius?: RadiusType;
    iconSrc?: ImageSourcePropType;
    textProps?: TextProps;
    spacing?: number;
    selected?: boolean;
    type?: ComponentType;
    selectedColor?: string;
    unselectedColor?: string;
}

export function ChipItem({
    type,
    text,
    textProps,
    iconSrc,
    spacing = 8,
    activeOpacity = 0.7,
    selected = false,
    selectedColor,
    unselectedColor,
    ...props
}: ChipItemProps) {
    const { colors } = useTheme();

    return (
        <ChipItemContainer
            type={type}
            selected={selected}
            activeOpacity={activeOpacity}
            selectedColor={selectedColor}
            unselectedColor={unselectedColor}
            {...props}
        >
            {iconSrc && <WrappedImage source={iconSrc} style={{ marginRight: spacing }} />}
            {text && (
                <Text
                    color={
                        type === 'contained'
                            ? colors.white
                            : selected
                            ? selectedColor || colors.primary
                            : unselectedColor || colors.text300
                    }
                    {...textProps}
                >
                    {text}
                </Text>
            )}
        </ChipItemContainer>
    );
}
