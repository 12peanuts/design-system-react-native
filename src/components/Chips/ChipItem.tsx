import React from 'react';
import { useTheme } from '@emotion/react';
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { Text, TextProps } from '@12peanuts/design-system-react-native';
import { ChipItemContainer, WrappedImage } from './ChipItem.styles';
import { ComponentType, RadiusType } from '../../shared';

export interface ChipDataBase {
    text?: string;
    iconSrc?: ImageSourcePropType;
}

export interface ChipItemStyleProps extends TouchableOpacityProps {
    type?: ComponentType;
    radius?: RadiusType;
    textProps?: TextProps;
    spacing?: number;
    selected?: boolean;
    activeColor?: string;
    inactiveColor?: string;
}

export function ChipItem({
    text,
    iconSrc,
    type = 'contained',
    radius,
    textProps,
    spacing = 8,
    selected = false,
    activeOpacity = 0.7,
    activeColor,
    inactiveColor,
    ...props
}: ChipDataBase & ChipItemStyleProps) {
    const { colors } = useTheme();
    const iconMarginRight = text ? spacing : 0;

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
            {text && (
                <Text
                    color={
                        type === 'contained'
                            ? colors.white
                            : selected
                            ? activeColor || colors.primary
                            : inactiveColor || colors.text300
                    }
                    {...textProps}
                >
                    {text}
                </Text>
            )}
        </ChipItemContainer>
    );
}
