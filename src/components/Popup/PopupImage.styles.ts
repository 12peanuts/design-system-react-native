import styled, { css } from '@emotion/native';
import { ImageStyle } from 'react-native';
import { PopupImageProps } from './PopupImage';
import { RadiusSize } from '../../shared';

export const StyledImage = styled.Image<PopupImageProps>`
    width: 100%;
    aspect-ratio: ${(props) => `${props.ratio || 1 / 1}`};

    ${(props) => {
        const radius = RadiusSize[props.radius || 'Large'];
        return css<ImageStyle>`
            border-top-left-radius: ${props.borderTopLeftRadius || radius};
            border-top-right-radius: ${props.borderTopRightRadius || radius};
            border-bottom-left-radius: ${props.borderBottomLeftRadius || radius};
            border-bottom-right-radius: ${props.borderBottomLeftRadius || radius};
        `;
    }};
`;
