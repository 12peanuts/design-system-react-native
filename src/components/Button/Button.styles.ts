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
        const { theme, disabled, type } = props;
        switch (type) {
            case 'contained':
                return css`
                    background-color: ${disabled ? theme.colors.inactive : theme.colors.primary};
                `;
            case 'outlined':
                return css`
                    border: 1.5px solid ${theme.colors.secondary};
                `;
            case 'ghost':
            default:
                return css``;
        }
    }};
`;
