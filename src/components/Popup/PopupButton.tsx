import React from 'react';
import { Layout, LayoutProps } from '../Layout';
import { Button, ButtonProps } from '../Button';
import type { StyleProp, ViewStyle } from 'react-native';

export interface PopupButtonProps {
    style?: StyleProp<ViewStyle>;
    primaryButtonProps: ButtonProps;
    secondaryButtonProps?: ButtonProps;
    containerProps?: LayoutProps;
}

export const PopupButton: React.FC<PopupButtonProps> = ({
    primaryButtonProps,
    secondaryButtonProps,
    containerProps,
}) => {
    return (
        <Layout orientation="vertical" paddingAll="Large" {...containerProps}>
            <Button {...primaryButtonProps} />
            {secondaryButtonProps && <Button {...secondaryButtonProps} />}
        </Layout>
    );
};
