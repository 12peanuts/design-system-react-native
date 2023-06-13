import React from 'react';
import { ImageSourcePropType, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { AvatarImage, ActionIcon } from './Avatar.styles';
import { AvatarSizeType } from './types';
import AvatarDefaultImage from '../../assets/images/ic-32-avatar-default.png';

export interface AvatarProps extends TouchableOpacityProps {
    size: AvatarSizeType;
    source?: ImageSourcePropType;
    actionIcon?: ImageSourcePropType;
}

export const Avatar: React.FC<AvatarProps> = ({
    size,
    activeOpacity = 0.7,
    source = AvatarDefaultImage,
    actionIcon,
    ...props
}) => {
    return (
        <TouchableOpacity activeOpacity={activeOpacity} {...props}>
            <AvatarImage source={source} size={size} resizeMode="stretch" />
            {actionIcon && <ActionIcon source={actionIcon} />}
        </TouchableOpacity>
    );
};
