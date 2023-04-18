import React from 'react';
import { Layout } from '../Layout';
import { Button, ButtonProps } from '../Button';
import type { StyleProp, ViewStyle } from 'react-native';

export interface PopupButtonProps {
    style?: StyleProp<ViewStyle>;
    primaryButtonProps: ButtonProps;
    secondaryButtonProps?: ButtonProps;
}

export const PopupButton: React.FC<PopupButtonProps> = ({
    primaryButtonProps,
    secondaryButtonProps,
    style,
}) => {
    return (
        <Layout
            orientation="vertical"
            topPadding="Large"
            bottomPadding="Large"
            leftPadding="Large"
            rightPadding="Large"
            style={style}
        >
            <Button {...primaryButtonProps} />
            {secondaryButtonProps && <Button {...secondaryButtonProps} />}
        </Layout>
    );
};
