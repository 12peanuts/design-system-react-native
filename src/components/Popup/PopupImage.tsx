import React from 'react';
import type { ImageProps } from 'react-native';
import { StyledImage } from './PopupImage.styles';
import type { RadiusType } from '../../shared';

export interface PopupImageProps extends Omit<ImageProps, 'borderRadius'> {
    radius?: RadiusType;
    ratio?: number;
}

export const PopupImage: React.FC<PopupImageProps> = (props) => {
    return <StyledImage {...props} />;
};
