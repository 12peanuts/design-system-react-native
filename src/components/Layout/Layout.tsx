import React, { Children, cloneElement, isValidElement, ReactElement } from 'react';
import type { ViewProps, ViewStyle } from 'react-native';
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

export const Layout: React.FC<LayoutProps> = ({
    children,
    orientation = 'vertical',
    spacing = 12,
    ...props
}) => {
    const childrenElements = Children.toArray(children)
        .filter((element) => isValidElement(element))
        .map((element, index, elements) => {
            const reactElement = element as ReactElement;
            const elementsLastIndex = elements.length - 1;
            const contentStyle: ViewStyle = {
                marginRight:
                    orientation === 'horizontal' && index < elementsLastIndex ? spacing : 0,
                marginBottom: orientation === 'vertical' && index < elementsLastIndex ? spacing : 0,
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                ...reactElement.props.style,
            };
            // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
            return cloneElement(reactElement, {
                ...reactElement.props,
                style: contentStyle,
            });
        });
    return (
        <LayoutContainer orientation={orientation} {...props}>
            {childrenElements}
        </LayoutContainer>
    );
};
