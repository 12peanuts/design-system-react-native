import styled, { css } from '@emotion/native';
import { ChipItemStyleProps } from './ChipItem';
import { RadiusSize } from '../../shared';

export const ChipItemContainer = styled.TouchableOpacity<ChipItemStyleProps>`
    flex-direction: row;
    align-items: center;
    padding: 7px 16px 8px;
    border-radius: ${(props) => RadiusSize[props.radius || 'Circle']};

    ${(props) => {
        const { theme, type, selected, activeColor, inactiveColor } = props;
        switch (type) {
            case 'contained':
                return css`
                    background-color: ${selected
                        ? activeColor || theme.colors.primary
                        : inactiveColor || theme.colors.gray400};
                `;
            case 'outlined':
                return css`
                    border-width: 1.5px;
                    border-color: ${selected
                        ? activeColor || theme.colors.primary
                        : inactiveColor || theme.colors.gray400};
                    background-color: ${selected
                        ? activeColor
                            ? `${activeColor}33`
                            : `${theme.colors.primary}33`
                        : undefined};
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
