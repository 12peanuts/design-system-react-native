import { css } from '@emotion/native';
import type { Theme } from '@emotion/react';
import type { TextProps } from '../components/Text';

type TypographyProps = TextProps & { theme: Theme };

export const typographyStyle = (props: TypographyProps) => {
  const { theme, varient, color, isBold, language } = props;
  const { fontSize, fontWeight } = theme.typography[varient || 'body1'];
  const {
    bold: boldFont,
    medium: mediumFont,
    regular: regularFont,
  } = theme.fontFamily[language || 'en'];
  const isMedium = varient === 'subtitle1' || varient === 'subtitle2';
  const isRegular =
    varient === 'body1' ||
    varient === 'body2' ||
    varient === 'caption' ||
    varient === undefined;
  let fontFamily;

  if (isBold) fontFamily = boldFont;
  else if (isMedium) fontFamily = mediumFont;
  else fontFamily = isRegular ? regularFont : boldFont;

  return css`
    font-size: ${fontSize};
    font-weight: ${isBold ? '600' : fontWeight};
    color: ${theme.colors[color || 'gray200']};
    font-family: ${fontFamily};
  `;
};
