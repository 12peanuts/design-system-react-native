import styled, { css } from '@emotion/native';
import { ScreenPadding } from '../../shared';
import type { LayoutProps } from './Layout';

export const LayoutContainer = styled.View<LayoutProps>`
    ${(props) => {
        const padding = ScreenPadding[props.paddingAll || 'None'];
        return css`
            flex-direction: ${props.orientation === 'horizontal' ? 'row' : 'column'};
            padding-top: ${props.paddingTop ? ScreenPadding[props.paddingTop] : padding};
            padding-bottom: ${props.paddingBottom ? ScreenPadding[props.paddingBottom] : padding};
            padding-left: ${props.paddingLeft ? ScreenPadding[props.paddingLeft] : padding};
            padding-right: ${props.paddingRight ? ScreenPadding[props.paddingRight] : padding};
        `;
    }}
`;
