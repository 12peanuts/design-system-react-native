import React from 'react';
import { Image, ImageSourcePropType, ViewProps } from 'react-native';
import { Theme, useTheme } from '@emotion/react';
import type { ComponentType, RadiusType } from '../../shared';
import { Text, TextProps } from '../Text';
import { TagContainer } from './Tag.styles';

export interface TagProps extends ViewProps {
    type?: ComponentType;
    radius?: RadiusType;
    text?: string;
    textProps?: TextProps;
    contentsSpacing?: number;
    iconSrc?: ImageSourcePropType;
    iconColor?: keyof Theme['colors'];
    color?: string;
}

export const Tag: React.FC<TagProps> = ({
    text,
    type = 'contained',
    iconSrc,
    iconColor,
    textProps,
    contentsSpacing = 8,
    color: passedColor,
    ...props
}) => {
    const { colors } = useTheme();
    const isIconOnly = iconSrc !== undefined && text === undefined;
    const tintColor = iconColor && colors[iconColor];
    const iconMarginRight = isIconOnly ? 0 : contentsSpacing;
    const color = passedColor || colors.primary;

    return (
        <TagContainer type={type} color={color} {...props}>
            {iconSrc && (
                <Image source={iconSrc} style={{ marginRight: iconMarginRight, tintColor }} />
            )}
            {text && (
                <Text color={color || colors.primary} {...textProps}>
                    {text}
                </Text>
            )}
        </TagContainer>
    );
};
