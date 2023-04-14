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
}

export const Tag: React.FC<TagProps> = ({
    text,
    type = 'contained',
    radius = 'Large',
    iconSrc,
    iconColor,
    textProps,
    contentsSpacing = 8,
    ...props
}) => {
    const { colors } = useTheme();
    const isIconOnly = iconSrc !== undefined && text === undefined;
    const tintColor = iconColor && colors[iconColor];
    const iconMarginRight = isIconOnly ? 0 : contentsSpacing;

    return (
        <TagContainer type={type} radius={radius} {...props}>
            {iconSrc && (
                <Image source={iconSrc} style={{ marginRight: iconMarginRight, tintColor }} />
            )}
            {text && <Text {...textProps}>{text}</Text>}
        </TagContainer>
    );
};
