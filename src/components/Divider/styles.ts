import styled, { css } from '@emotion/native';
import { DividerProps } from './Divider';
import { ScreenPadding } from '../../shared';

export const DividerLine = styled.View<DividerProps>`
    ${(props) => {
        const padding = ScreenPadding[props.marginAll || 'None'];
        const value = `${props.value || 1.5}px`;
        return css`
            background-color: ${props.theme.colors.gray200};
            width: ${props.orientation === 'horizontal' ? '100%' : value};
            height: ${props.orientation === 'vertical' ? '100%' : value};
            flex-direction: ${props.orientation === 'horizontal' ? 'row' : 'column'};
            margin-top: ${props.marginTop ? ScreenPadding[props.marginTop] : padding};
            margin-bottom: ${props.marginBottom ? ScreenPadding[props.marginBottom] : padding};
            margin-left: ${props.marginLeft ? ScreenPadding[props.marginLeft] : padding};
            margin-right: ${props.marginRight ? ScreenPadding[props.marginRight] : padding};
        `;
    }}
`;
