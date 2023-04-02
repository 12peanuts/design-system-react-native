import type { RadiusSize, ScreenPadding } from './enums';

export type RadiusType = keyof typeof RadiusSize;
export type ScreenPaddingType = keyof typeof ScreenPadding;
export type ComponentType = 'contained' | 'outlined' | 'ghost';
export type Orientation = 'horizontal' | 'vertical';
