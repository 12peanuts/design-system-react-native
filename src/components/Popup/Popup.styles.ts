import styled, { css } from '@emotion/native';
import type { ImageStyle } from 'react-native';
import type { PopupProps } from './Popup';
import type { PopupImageProps } from './PopupImage';
import { RadiusSize } from '../../shared';
import { Button } from '../Button';
import { Text } from '../Text';

export type PopupContainerProps = Pick<PopupProps, 'radius'>;

export const PopupBackground = styled.Pressable`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    padding: 30px;
`;

export const PopupContainer = styled.View<PopupContainerProps>`
    ${(props) => {
        return css`
            background-color: ${props.theme.colors.white};
            border-radius: ${RadiusSize[props.radius || 'Large']};
        `;
    }}
`;

export const PopupButtonArea = styled.View`
    background-color: blue;
    padding: 20px;
`;

export const StyledPopupImage = styled.Image<PopupImageProps>`
    width: 100%;

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

export const PopupCloseButton = styled(Button)`
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
`;

export const WrappedPopupText = styled(Text)`
    text-align: center;
`;
