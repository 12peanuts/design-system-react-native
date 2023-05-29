import React from 'react';
import type { ViewProps } from 'react-native';
import type { Orientation, ScreenPaddingType } from '../../shared';
import { LayoutContainer } from './Layout.styles';

export interface LayoutProps extends ViewProps {
    paddingAll?: ScreenPaddingType;
    paddingTop?: ScreenPaddingType;
    paddingBottom?: ScreenPaddingType;
    paddingLeft?: ScreenPaddingType;
    paddingRight?: ScreenPaddingType;
    orientation?: Orientation;
    spacing?: number;
    flex?: number;
}

export const Layout: React.FC<LayoutProps> = ({
    children,
    flex = undefined,
    spacing = 12,
    orientation = 'vertical',
    ...props
}) => {
    return (
        <LayoutContainer orientation={orientation} flex={flex} spacing={spacing} {...props}>
            {children}
        </LayoutContainer>
    );
};
