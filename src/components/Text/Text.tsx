import React from 'react';
import type { TextProps as TextPropsBase } from 'react-native';
import type { Theme } from '@emotion/react';
import { StyledText } from './Text.styles';

export interface TextProps extends TextPropsBase {
  varient?: keyof Theme['typography'];
  language?: keyof Theme['fontFamily'];
  color?: keyof Theme['colors'];
  isBold?: boolean;
}

export const Text: React.FC<TextProps> = ({
  isBold = false,
  children,
  ...props
}) => {
  return (
    <StyledText isBold={isBold} {...props}>
      {children}
    </StyledText>
  );
};
