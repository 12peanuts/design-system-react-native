import React from 'react';
import { DividerLine } from './styles';
import { ViewProps } from 'react-native/types';
import { Orientation, ScreenPaddingType } from '../../shared';

export interface DividerProps extends ViewProps {
    orientation?: Orientation;
    value?: number;
    marginAll?: ScreenPaddingType;
    marginTop?: ScreenPaddingType;
    marginBottom?: ScreenPaddingType;
    marginLeft?: ScreenPaddingType;
    marginRight?: ScreenPaddingType;
}

export function Divider(props: DividerProps) {
    return <DividerLine {...props} />;
}
