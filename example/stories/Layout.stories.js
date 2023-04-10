import React from 'react';
import { View } from 'react-native';
import { Section, Text, Button } from '@12peanuts/design-system-react-native';

export default {
  title: 'Component/Layout',
  decorators: [
    (Story) => (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Story />
      </View>
    ),
  ],
  component: () => {
    return (
      <Section>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
      </Section>
    );
  },
  args: {
    orientation: 'vertical',
    spacing: 12,
  },
};

export const Vertical = {
  args: {
    orientation: 'vertical',
    spacing: 30,
  },
  render: () => {
    return (
      <Section orientation="verical" spacing={50}>
        <Button text="메롱" />
        <Text>hello</Text>
        <Text>hello</Text>
      </Section>
    );
  },
};

export const Horiztonal = {
  args: {
    orientation: 'horizontal',
    spacing: 12,
  },
  render: () => {
    return (
      <Section orientation="horizontal" spacing={12}>
        <Text>hello</Text>
        <Text>hello</Text>
        <Text>hello</Text>
      </Section>
    );
  },
};
