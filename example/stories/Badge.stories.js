import React from 'react';
import { View } from 'react-native';
import { Layout, Text, Badge } from '@12peanuts/design-system-react-native';

export default {
  title: 'Component/Badge',
  component: () => {
    return (
      <Layout orientation="horizontal" spacing={12}>
        <Badge value={30} />
        <Badge value={10} />
        <Badge value={100} />
      </Layout>
    );
  },
};

export const IconButton = {
  render: () => {
    return <Layout orientation="vertical" spacing={50}></Layout>;
  },
};

export const IconTextButton = {
  render: () => {
    return <Layout orientation="horizontal" spacing={22}></Layout>;
  },
};
