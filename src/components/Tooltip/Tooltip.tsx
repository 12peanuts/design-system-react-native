import React from 'react';
import type { ViewProps } from 'react-native';
import {
    CloseButton,
    TooltipButtonArea,
    TooltipContainer,
    TooltipTextArea,
    WrappedText,
} from './Tooltip.styles';
import type { TextProps } from '../Text';
import { Button } from '../Button';
import type { ButtonProps } from '../Button';
import type { RadiusType, ScreenPaddingType } from '../../shared';
import CloseIconSrc from '../../assets/images/ic-20-regular-close.png';

export interface TooltipProps extends ViewProps {
    text?: string;
    textProps?: TextProps;
    primaryButton?: ButtonProps;
    secondaryButton?: ButtonProps;
    hasCloseButton?: boolean;
    radius?: RadiusType;
    arrow?: boolean;
    padding?: ScreenPaddingType;
    topPadding?: ScreenPaddingType;
    bottomPadding?: ScreenPaddingType;
    leftPadding?: ScreenPaddingType;
    rightPadding?: ScreenPaddingType;
}

export const Tooltip: React.FC<TooltipProps> = ({
    text,
    textProps,
    primaryButton,
    secondaryButton,
    hasCloseButton,
    arrow,
    ...props
}) => (
    <TooltipContainer {...props}>
        <TooltipTextArea>
            <WrappedText {...textProps}>{text}</WrappedText>
            {hasCloseButton && <CloseButton iconSrc={CloseIconSrc} />}
        </TooltipTextArea>
        <TooltipButtonArea>
            {primaryButton && <Button {...primaryButton} />}
            {secondaryButton && <Button {...secondaryButton} />}
        </TooltipButtonArea>
    </TooltipContainer>
);
