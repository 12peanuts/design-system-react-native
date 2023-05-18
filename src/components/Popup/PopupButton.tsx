import React from 'react';
import { ButtonProps } from '../Button';
import { Layout, LayoutProps } from '../Layout';
import { WrappedButton } from './PopupButton.styles';

export interface PopupButtonProps extends LayoutProps {
    primaryButtonProps: ButtonProps;
    secondaryButtonProps?: ButtonProps;
}

export const PopupButton: React.FC<PopupButtonProps> = ({
    primaryButtonProps,
    secondaryButtonProps,
    paddingAll = 'Large',
    ...props
}) => {
    return (
        <Layout paddingAll={paddingAll} {...props}>
            <WrappedButton {...primaryButtonProps} />
            {secondaryButtonProps && <WrappedButton {...secondaryButtonProps} />}
        </Layout>
    );
};
