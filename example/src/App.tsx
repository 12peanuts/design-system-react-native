import * as React from 'react';
import { View } from 'react-native';
import { ThemeProvider } from '@12peanuts/design-system-react-native';
import StorybookUIRoot from '../.storybook';

export default function App() {
  return (
    <ThemeProvider>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingVertical: 100,
          backgroundColor: '#343a40',
        }}
      >
        <StorybookUIRoot />
      </View>
    </ThemeProvider>
  );
}
