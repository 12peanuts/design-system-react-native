import React from 'react';
import type { PopupProps } from './Popup';
import { Layout, LayoutProps } from '../Layout';
import { WrappedPopupText } from './Popup.styles';
import type { TextProps } from '../Text';
import { useTheme } from '@emotion/react';

export type PopupTextProps = Pick<PopupProps, 'radius'> & {
    title?: string;
    titleTextProps?: TextProps;
    description?: string;
    descriptionTextProps?: TextProps;
    containerProps?: LayoutProps;
};

export const PopupText: React.FC<PopupTextProps> = ({
    title,
    titleTextProps,
    description,
    descriptionTextProps,
    containerProps,
}) => {
    const { colors } = useTheme();
    return (
        <Layout
            orientation="vertical"
            paddingTop="Medium"
            paddingBottom="Large"
            paddingLeft="Large"
            paddingRight="Large"
            {...containerProps}
        >
            {title && (
                <WrappedPopupText color={colors.gray800} {...titleTextProps}>
                    {title}
                </WrappedPopupText>
            )}
            {description && (
                <WrappedPopupText color={colors.gray600} {...descriptionTextProps}>
                    {description}
                </WrappedPopupText>
            )}
        </Layout>
    );
};
