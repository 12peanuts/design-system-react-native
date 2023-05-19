import React from 'react';
import { useTheme } from '@emotion/react';
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { ButtonContainer, StyledImage, WrappedText } from './Button.styles';
import { ComponentType, RadiusType } from '../../shared';
import { TextProps } from '../Text';

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
    radius = 'Large',
    textProps = {
        varient: 'subtitle1',
        isBold: true,
    },
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
            activeOpacity={activeOpacity}
            type={type}
            radius={radius}
            isIconOnly={isIconOnly}
            spacing={spacing}
            reverse={reverse}
            {...props}
        >
            {iconSrc && (
                <StyledImage source={iconSrc} marginRight={iconMarginRight} color={iconColor} />
            )}
            {text && (
                <WrappedText
                    varient="subtitle2"
                    isBold
                    color={colors.text100}
                    marginRight={textMarginRight}
                    {...textProps}
                >
                    {text}
                </WrappedText>
            )}
        </ButtonContainer>
    );
};
