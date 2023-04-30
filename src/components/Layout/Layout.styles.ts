import styled, { css } from '@emotion/native';
import { ScreenPadding } from '../../shared';
import type { LayoutProps } from './Layout';

export const LayoutContainer = styled.View<LayoutProps>`
    ${(props) => {
        const padding = ScreenPadding[props.paddingAll || 'None'];
        return css`
            flex-direction: ${props.orientation === 'horizontal' ? 'row' : 'column'};
            padding-top: ${props.topPadding ? ScreenPadding[props.topPadding] : padding};
            padding-bottom: ${props.bottomPadding ? ScreenPadding[props.bottomPadding] : padding};
            padding-left: ${props.leftPadding ? ScreenPadding[props.leftPadding] : padding};
            padding-right: ${props.rightPadding ? ScreenPadding[props.rightPadding] : padding};
        `;
    }}
`;
