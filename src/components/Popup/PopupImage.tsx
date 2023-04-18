import React from 'react';
import type { ImageSourcePropType } from 'react-native';
import { StyledPopupImage } from './Popup.styles';
import type { RadiusType } from '../../shared';

export interface PopupImageProps {
    source: ImageSourcePropType;
    radius?: RadiusType;
    width?: number | string;
    height?: number;
    aspectRatio?: number;
}

export const PopupImage: React.FC<PopupImageProps> = ({
    radius,
    source,
    width = '100%',
    height,
    aspectRatio,
}) => {
    return (
        <StyledPopupImage radius={radius} source={source} style={{ width, height, aspectRatio }} />
    );
};
