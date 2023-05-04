import '@emotion/react';
import type { DefaultTheme } from 'src/theme/theme';

declare module '@emotion/react' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface Theme extends DefaultTheme {}
}
