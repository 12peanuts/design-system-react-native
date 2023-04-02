import styled from '@emotion/native';
import type { TextProps } from './Text';
import { typographyStyle } from '../../shared';

export const StyledText = styled.Text<TextProps>`
  ${typographyStyle};
`;
