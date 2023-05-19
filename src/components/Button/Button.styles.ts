import styled, { css } from '@emotion/native';
import { ImageStyle } from 'react-native';
import { ButtonProps } from './Button';
import { RadiusSize } from '../../shared';
import { Text } from '../Text';

type ButtonContainerProps = ButtonProps & {
    isIconOnly: boolean;
};

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    align-items: center;
    justify-content: center;
    border-radius: ${(props) => RadiusSize[props.radius || 'None']};
    padding: ${(props) => (props.isIconOnly ? `9px` : `12px 18px`)};

    ${(props) => {
        const { theme, disabled, type, color, disabledColor } = props;
        switch (type) {
            case 'contained':
                return css`
                    background-color: ${disabled
                        ? disabledColor || theme.colors.inactive
                        : color || theme.colors.primary};
                `;
            case 'outlined':
                return css`
                    border-width: ${disabled ? '0px' : '1.5px'};
                    border-color: ${color || theme.colors.primary};
                    background-color: ${disabled
                        ? disabledColor || theme.colors.inactive
                        : undefined};
                `;
            case 'ghost':
            default:
                return css``;
        }
    }};
`;

export const StyledImage = styled.Image<{ marginRight: number; color?: string }>`
    min-width: 20px;
    aspect-ratio: 1/1;

    ${(props) => css<ImageStyle>`
        margin-right: ${props.marginRight};
        tint-color: ${props.color};
    `};
`;

export const WrappedText = styled(Text)<{ marginRight: number }>`
    margin-right: ${(props) => props.marginRight};
`;
