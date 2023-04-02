import styled, { css } from '@emotion/native';
import { ScreenPadding } from '../../shared';
import type { LayoutProps } from './Layout';

export const LayoutContainer = styled.View<LayoutProps>`
  padding: 0 16px;

  ${(props) => {
    return css`
      flex-direction: ${props.orientation === 'horizontal' ? 'row' : 'column'};
      padding: ${ScreenPadding[props.horrizontalPadding || 'None']};
    `;
  }}
`;
