import React from 'react';
import { useTheme } from '@emotion/react';
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { Text, TextProps } from '@12peanuts/design-system-react-native';
import { ChipItemContainer, WrappedImage } from './ChipItem.styles';
import { ComponentType, RadiusType } from '../../shared';

export interface ChipData {
    label?: string;
    iconSrc?: ImageSourcePropType;
}

export interface ChipItemStyleProps extends TouchableOpacityProps {
    type?: ComponentType;
    radius?: RadiusType;
    labelProps?: TextProps;
    spacing?: number;
    selected?: boolean;
    activeColor?: string;
    inactiveColor?: string;
}

export function ChipItem({
    label,
    iconSrc,
    type = 'contained',
    radius,
    labelProps,
    spacing = 8,
    selected = false,
    activeOpacity = 0.7,
    activeColor,
    inactiveColor,
    ...props
}: ChipData & ChipItemStyleProps) {
    const { colors } = useTheme();
    const iconMarginRight = label ? spacing : 0;

    return (
        <ChipItemContainer
            type={type}
            radius={radius}
            selected={selected}
            activeOpacity={activeOpacity}
            activeColor={activeColor}
            inactiveColor={inactiveColor}
            {...props}
        >
            {iconSrc && <WrappedImage source={iconSrc} style={{ marginRight: iconMarginRight }} />}
            {label && (
                <Text
                    color={
                        type === 'contained'
                            ? colors.white
                            : selected
                            ? activeColor || colors.primary
                            : colors.text100
                    }
                    {...labelProps}
                >
                    {label}
                </Text>
            )}
        </ChipItemContainer>
    );
}
