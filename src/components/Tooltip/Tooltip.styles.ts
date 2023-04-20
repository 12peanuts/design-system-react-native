import styled, { css } from '@emotion/native';
import { RadiusSize, ScreenPadding } from '../../shared';
import { Text } from '../Text';
import type { TooltipProps } from './Tooltip';
import { Button } from '../Button';

type TooltipContainerProps = Pick<
    TooltipProps,
    'radius' | 'padding' | 'topPadding' | 'leftPadding' | 'rightPadding' | 'bottomPadding'
>;

export const TooltipContainer = styled.View<TooltipContainerProps>`
    ${(props) => {
        const padding = ScreenPadding[props.padding || 'Medium'];
        return css`
            background-color: ${props.theme.colors.primary};
            border-radius: ${RadiusSize[props.radius || 'Small']};
            padding-top: ${props.topPadding ? ScreenPadding[props.topPadding] : padding};
            padding-bottom: ${props.bottomPadding ? ScreenPadding[props.bottomPadding] : padding};
            padding-left: ${props.leftPadding ? ScreenPadding[props.leftPadding] : padding};
            padding-right: ${props.rightPadding ? ScreenPadding[props.rightPadding] : padding};
        `;
    }}
`;

export const TooltipArrow = styled.View``;

export const TooltipTextArea = styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;

export const TooltipButtonArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const WrappedText = styled(Text)`
    /* padding: 20px 16px; */
    flex: 1;
`;

export const CloseButton = styled(Button)`
    padding: 0;
`;
