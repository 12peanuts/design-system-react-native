import styled, { css } from '@emotion/native';
import { ChipItemProps } from './ChipItem';
import { RadiusSize } from '../../shared';

export const ChipItemContainer = styled.TouchableOpacity<ChipItemProps>`
    flex-direction: row;
    align-items: center;
    padding: 10px 16px;
    border-radius: ${(props) => RadiusSize[props.radius || 'Circle']};

    ${(props) => {
        const { theme, type, selected, selectedColor, unselectedColor } = props;
        switch (type) {
            case 'contained':
                return css`
                    background-color: ${selected
                        ? selectedColor || theme.colors.primary
                        : unselectedColor || theme.colors.gray400};
                `;
            case 'outlined':
                return css`
                    border-width: 1.5px;
                    border-color: ${selected ? selectedColor || theme.colors.primary : unselectedColor || theme.colors.gray400};
                `;
            case 'ghost':
            default:
                return css``;
        }
    }};
`;

export const WrappedImage = styled.Image`
    min-height: 20px;
    min-width: 20px;
`;
