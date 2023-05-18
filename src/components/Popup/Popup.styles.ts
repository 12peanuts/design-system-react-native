import styled, { css } from '@emotion/native';
import type { PopupProps } from './Popup';
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

export const PopupCloseButton = styled(Button)`
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
`;

export const WrappedPopupText = styled(Text)`
    text-align: center;
`;
