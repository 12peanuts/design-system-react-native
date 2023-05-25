# @12peanuts/design-system-react-native

A set of UI components for ReactNative.
If you are looking for UI kit, try this in your project.

## Installation

### Using npm:

```sh
npm install @12peanuts/design-system-react-native
```

### Using yarn:

```sh
yarn add @12peanuts/design-system-react-native
```

## Usage

After installation, wrap your entry point with `<ThemeProvider>` that supports predefined theme.

```ts
import React from 'react';
import { ThemeProvider } from '@12peanuts/design-system-react-native';

export default function App() {
    return (
        <ThemeProvider>
            <RootView />
        </ThemeProvider>
    );
}
```

⚠️ if you want to use `Tabs`, you need to install [react-native-reanimated(>=2.7.0)](https://github.com/software-mansion/react-native-reanimated) first.


## Tutorials

-   [Customize theme](./docs/customize-theme.md)
-   [Button Example](./docs/button.md)
-   [Tabs Example](./docs/tabs.md)

## Contribution

This project is an open source project with MIT license - you can browse source code and use components in your applications without any limitations. Although th project is open source, we do not accept any contributions to this project.

## License

MIT

---
