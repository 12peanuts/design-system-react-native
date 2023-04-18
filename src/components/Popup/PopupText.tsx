import React from 'react';
import type { PopupProps } from './Popup';
import { Layout } from '../Layout';
import { StyledPopupText } from './Popup.styles';

export type PopupTextProps = Pick<PopupProps, 'radius'> & {
    title?: string;
    description?: string;
};

export const PopupText: React.FC<PopupTextProps> = ({ title, description }) => {
    return (
        <Layout
            orientation="vertical"
            topPadding="Medium"
            bottomPadding="Large"
            leftPadding="Large"
            rightPadding="Large"
        >
            <StyledPopupText>{title}</StyledPopupText>
            <StyledPopupText>{description}</StyledPopupText>
        </Layout>
    );
};
