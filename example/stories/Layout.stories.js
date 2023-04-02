import React from 'react';
import { View } from 'react-native';
import { Layout } from '@12peanuts/design-system-react-native';

const LayoutMeta = {
  title: 'Component/Layout',
  component: Layout,
  args: {
    orientation: 'vertical',
    spacing: 12,
  },
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story></Story>
      </View>
    ),
  ],
};

export default LayoutMeta;

export const Vertical = {
  args: {
    orientation: 'vertical',
    spacing: 12,
  },
};

export const Horiztonal = {
  args: {
    orientation: 'horizontal',
    spacing: 4,
  },
};
