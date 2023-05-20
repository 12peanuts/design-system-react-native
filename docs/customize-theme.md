# Extend or customize global theme

By default, `props.theme` has some predefined props like `colors`, `typography` and `fontFamily`. if you want to extend or customize, you can redefine theme and put your props in it like below.

```ts
// in types/emotion.d.ts
import '@emotion/react';
import { DefaultTheme } from '@12peanuts/design-system-react-native';

declare module '@emotion/react' {
    export interface Theme extends DefaultTheme {
        // add props you want to use like this.
        deviceSize: {
            width: number;
            height: number;
        };
    }
}
```

And then you have to set your theme props with `getGlobalTheme()`.

```ts
// in App.tsx

import React from 'react';
import { ThemeProvider, getGlobaltheme } from '@12peanuts/design-system-react-native';

export default function App() {
    const theme = getGlobalTheme('dark', {
        deviceSize: {
            width: 300,
            height: 300,
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <RootView />
        </ThemeProvider>
    );
}
```

Finally, you can use it through `useTheme` hook.

```ts
function YourComponent() {
    const { colors, deviceSize } = useTheme();
    return (
        <Layout orientation="vertical" spacing={20}>
            <Button
                text="Button"
                type="contained"
                textProps={{ color: colors.primary, style: { height: deviceSize.height / 10 } }}
            />
        </Layout>
    );
}
```
