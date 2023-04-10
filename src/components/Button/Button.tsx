import React from 'react';
import {
  Image,
  ImageSourcePropType,
  TouchableOpacityProps,
} from 'react-native';
import type { ComponentType, RadiusType } from '../../shared';
import { Text, TextProps } from '../Text';
import { ButtonContainer } from './Button.styles';

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
  radius = 'Large',
  textProps,
  iconColor,
  contentsSpacing = 8,
  iconSrc,
  text,
  ...props
}) => {
  const isIconOnly = iconSrc !== undefined && text === undefined;
  const iconMarginRight = isIconOnly ? 0 : contentsSpacing;

  return (
    <ButtonContainer
      activeOpacity={activeOpacity}
      type={type}
      radius={radius}
      isIconOnly={isIconOnly}
      {...props}
    >
      {iconSrc && (
        <Image
          source={iconSrc}
          style={{ marginRight: iconMarginRight, tintColor: iconColor }}
        />
      )}
      {text && <Text {...textProps}>{text}</Text>}
    </ButtonContainer>
  );
};
