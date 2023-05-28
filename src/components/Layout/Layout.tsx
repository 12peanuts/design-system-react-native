import React from 'react';
import type { ViewProps } from 'react-native';
import type { Orientation, ScreenPaddingType } from '../../shared';
import { LayoutContainer } from './Layout.styles';

export interface LayoutProps extends ViewProps {
    orientation?: Orientation;
    spacing?: number;
    paddingAll?: ScreenPaddingType;
    paddingTop?: ScreenPaddingType;
    paddingBottom?: ScreenPaddingType;
    paddingLeft?: ScreenPaddingType;
    paddingRight?: ScreenPaddingType;
    flex?: number;
}

export const Layout: React.FC<LayoutProps> = ({ children, orientation = 'vertical', ...props }) => {
    return (
        <LayoutContainer orientation={orientation} {...props}>
            {children}
        </LayoutContainer>
    );
};
