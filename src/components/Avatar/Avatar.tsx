import React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import type { BadgeProps } from '../Badge';
import { AvatarImage, AvatarContainer, AvatarBadge } from './Avatar.styles';

export enum AvatarSize {
  XSmall = '32px',
  Small = '42px',
  Medium = '50px',
  Large = '60px',
  XLarge = '72px',
  XXLarge = '118px',
}
export type AvatarType =
  | 'default'
  | 'with-badge-dot'
  | 'with-badge-number'
  | 'with-badge-icon';
export type BadgePosition = 'top' | 'bottom';
export interface AvatarProps extends TouchableOpacityProps {
  size?: keyof typeof AvatarSize;
  type?: AvatarType;
  badgeProps?: BadgeProps;
  badgePosition?: BadgePosition;
}

export const Avatar: React.FC<AvatarProps> = ({
  size,
  activeOpacity = 0.7,
  type = 'default',
  badgeProps,
  badgePosition = 'bottom',
  ...props
}) => {
  return (
    <AvatarContainer activeOpacity={activeOpacity} size={size} {...props}>
      <AvatarImage
        source={{ uri: 'https://picsum.photos/id/237/200/300' }}
        size={size}
        resizeMode="stretch"
      />
      {type !== 'default' && size === 'XXLarge' && (
        <AvatarBadge
          size="XXLarge"
          badgePosition={badgePosition}
          {...badgeProps}
        />
      )}
    </AvatarContainer>
  );
};
