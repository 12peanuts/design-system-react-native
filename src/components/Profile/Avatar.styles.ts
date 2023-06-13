import styled, { css } from '@emotion/native';
import { ImageStyle } from 'react-native';
import { AvatarProps } from './Avatar';
import { AvatarSize } from './types';
import { RadiusSize } from '../../shared';

export const AvatarImage = styled.Image<Pick<AvatarProps, 'size'>>`
    border-radius: ${RadiusSize.Circle};
    aspect-ratio: 1/1;

    ${(props) => {
        const size = AvatarSize[props.size];
        return css<ImageStyle>`
            height: ${size};
        `;
    }}
`;

export const ActionIcon = styled.Image`
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: ${RadiusSize.Circle};
`;
