import styled, { css } from '@emotion/native';
import { AvatarProps, AvatarSize } from './Avatar';
import { RadiusSize } from '../../shared';
import { Badge } from '../Badge';
import type { ImageStyle } from 'react-native';

type AvatarImageProps = Pick<AvatarProps, 'size'>;
type AvatarBadgeProps = Pick<AvatarProps, 'badgePosition'>;

export const AvatarContainer = styled.TouchableOpacity<AvatarProps>`
  border-radius: ${RadiusSize.Circle};
  background-color: tomato;
  align-self: baseline;
`;

export const AvatarImage = styled.Image<AvatarImageProps>`
  border-radius: ${RadiusSize.Circle};

  ${(props) => {
    const size = AvatarSize[props.size || 'XSmall'];
    return css<ImageStyle>`
      width: ${size};
      height: ${size};
    `;
  }}
`;

export const AvatarBadge = styled(Badge)<AvatarBadgeProps>`
  position: absolute;
  top: ${(props) => (props.badgePosition === 'top' ? '0px' : 'auto')};
  bottom: 0;
  right: 0;
`;
