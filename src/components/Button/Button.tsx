import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import type { ComponentType, RadiusType } from '../../shared';
import { Text, TextProps } from '../Text';
import { ButtonContainer } from './Button.styles';
import { useTheme } from '@emotion/react';

export interface ButtonProps extends TouchableOpacityProps {
    type?: ComponentType;
    radius?: RadiusType;
    text?: string;
    textProps?: TextProps;
    iconColor?: string;
    iconSrc?: ImageSourcePropType;
    color?: string;
    disabledColor?: string;
    reverse?: boolean;
    spacing?: number;
}

export const Button: React.FC<ButtonProps> = ({
    activeOpacity = 0.7,
    type = 'contained',
    textProps,
    iconColor,
    iconSrc,
    text,
    spacing = 8,
    reverse,
    ...props
}) => {
    const { colors } = useTheme();
    const isIconOnly = text === undefined;
    const iconMarginRight = isIconOnly ? 0 : reverse ? 0 : spacing;
    const textMarginRight = isIconOnly ? 0 : reverse ? spacing : 0;

    return (
        <ButtonContainer
            type={type}
            activeOpacity={activeOpacity}
            isIconOnly={isIconOnly}
            spacing={spacing}
            reverse={reverse}
            {...props}
        >
            {iconSrc && (
                <Image
                    source={iconSrc}
                    style={{ marginRight: iconMarginRight, tintColor: iconColor }}
                />
            )}
            {text && (
                <Text
                    varient="subtitle2"
                    isBold
                    color={colors.text100}
                    style={{ marginRight: textMarginRight }}
                    {...textProps}
                >
                    {text}
                </Text>
            )}
        </ButtonContainer>
    );
};
