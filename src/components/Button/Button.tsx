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
    contentsSpacing?: number;
    iconSrc?: ImageSourcePropType;
}

export const Button: React.FC<ButtonProps> = ({
    activeOpacity = 0.7,
    type = 'contained',
    textProps,
    iconColor,
    contentsSpacing = 8,
    iconSrc,
    text,
    ...props
}) => {
    const { colors } = useTheme();
    const isIconOnly = iconSrc !== undefined && text === undefined;
    const iconMarginRight = isIconOnly ? 0 : contentsSpacing;

    return (
        <ButtonContainer
            activeOpacity={activeOpacity}
            type={type}
            isIconOnly={isIconOnly}
            {...props}
        >
            {iconSrc && (
                <Image
                    source={iconSrc}
                    style={{ marginRight: iconMarginRight, tintColor: iconColor }}
                />
            )}
            {text && (
                <Text varient="subtitle2" color={colors.text100} isBold {...textProps}>
                    {text}
                </Text>
            )}
        </ButtonContainer>
    );
};
