import styled, { css } from '@emotion/native';
import { RadiusSize } from '../../shared';
import type { ButtonProps } from './Button';

type ButtonContainerProps = ButtonProps & {
    isIconOnly: boolean;
};

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
    align-items: center;
    border-radius: ${(props) => RadiusSize[props.radius || 'XLarge']};
    padding: ${(props) => (props.isIconOnly ? `12px` : `12px 18px`)};

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
