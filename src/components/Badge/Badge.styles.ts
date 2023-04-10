import styled, { css } from '@emotion/native';
import type { ImageStyle } from 'react-native';
import { RadiusSize } from '../../shared';
import { BadgeProps, BadgeSize } from './Badge';

export const BadgeContainer = styled.View<BadgeProps>`
  border-radius: ${RadiusSize.Circle};
  justify-content: center;
  align-items: center;
  align-self: baseline;

  ${(props) => {
    const { theme, size: sizeKey } = props;
    const size = BadgeSize[sizeKey || 'XLarge'];
    return css`
      width: ${size};
      height: ${size};
      background-color: ${theme.colors.primary};
      border: 2px solid ${theme.colors.white};
    `;
  }}
`;

export const BadgeIcon = styled.Image`
  ${(props) => {
    const size = props.source ? '16px' : 'auto';
    return css<ImageStyle>`
      width: ${size};
      height: ${size};
    `;
  }}
`;
