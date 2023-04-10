import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { Text, TextProps } from '../Text';
import { BadgeContainer } from './Badge.styles';

export enum BadgeSize {
  Small = '16px',
  Medium = '18px',
  Large = '20px',
  XLarge = '24px',
  XXLarge = '36px',
}

export interface BadgeProps {
  value?: number;
  iconSrc?: ImageSourcePropType;
  textProps?: TextProps;
  size?: keyof typeof BadgeSize;
}

export const Badge: React.FC<BadgeProps> = ({
  size,
  value,
  iconSrc,
  textProps,
  ...props
}) => {
  const displayedValue = value && value > 99 ? '+99' : value;

  return (
    <BadgeContainer size={size} {...props}>
      {iconSrc ? (
        <Image source={iconSrc} />
      ) : (
        <Text isBold varient="caption" {...textProps}>
          {displayedValue}
        </Text>
      )}
    </BadgeContainer>
  );
};
