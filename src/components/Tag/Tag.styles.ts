import styled, { css } from '@emotion/native';
import { RadiusSize } from '../../shared';
import type { TagProps } from './Tag';

export const TagContainer = styled.View<TagProps>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 12px 18px;
    border-radius: ${(props) => RadiusSize[props.radius || 'None']};

    ${(props) => {
        const { theme, type } = props;
        switch (type) {
            case 'contained':
                return css`
                    background-color: ${theme.colors.primary};
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
