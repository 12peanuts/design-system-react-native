import React from 'react';
import type { ImageProps } from 'react-native';
import { StyledPopupImage } from './Popup.styles';
import type { RadiusType } from '../../shared';

export interface PopupImageProps extends Omit<ImageProps, 'borderRadius'> {
    radius?: RadiusType;
}

export const PopupImage: React.FC<PopupImageProps> = (props) => {
    return <StyledPopupImage {...props} />;
};
