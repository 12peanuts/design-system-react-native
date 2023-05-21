import '@emotion/react';
import { DefaultTheme } from '@12peanuts/design-system-react-native';

declare module '@emotion/react' {
    export interface Theme extends DefaultTheme {
        deviceSize: {
            width: number;
            height: number;
        };
    }
}
