import React from 'react';
import { View } from 'react-native';
import { Layout, Text, Button } from '@12peanuts/design-system-react-native';

export default {
  title: 'Component/Button',
  component: () => {
    return (
      <Layout orientation="horizontal" spacing={12}>
        <Button text="hello" type="contained" />
        <Button text="hello" type="outlined" />
        <Button text="hello" type="ghost" />
      </Layout>
    );
  },
};

export const IconButton = {
  render: () => {
    return (
      <Layout orientation="vertical" spacing={50}>
        <Button text="hello" type="contained" />
        <Button text="hello" type="outlined" />
        <Button text="hello" type="ghost" />
      </Layout>
    );
  },
};

export const IconTextButton = {
  render: () => {
    return (
      <Layout orientation="horizontal" spacing={22}>
        <Button text="hello" type="contained" />
        <Button text="hello" type="outlined" />
        <Button text="hello" type="ghost" />
      </Layout>
    );
  },
};
