import styled, { css } from '@emotion/native';
import { RadiusSize } from '../../shared';
import type { ButtonProps } from './Button';

type ButtonContainerProps = ButtonProps & {
    isIconOnly: boolean;
};

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: ${(props) => RadiusSize[props.radius || 'XLarge']};
    padding: ${(props) => (props.isIconOnly ? '12px' : '12px 18px')};

    ${(props) => {
        const { theme, disabled, type, activeColor } = props;
        switch (type) {
            case 'contained':
                return css`
                    background-color: ${disabled
                        ? theme.colors.inactive
                        : activeColor || theme.colors.primary};
                `;
            case 'outlined':
                return css`
                    border-width: 1.5px;
                    border-color: ${activeColor || theme.colors.primary};
                `;
            case 'ghost':
            default:
                return css``;
        }
    }};
`;
