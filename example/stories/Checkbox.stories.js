import React from 'react';
import { View } from 'react-native';
import { Layout, Text, Checkbox } from '@12peanuts/design-system-react-native';

export default {
    title: 'Component/Checkbox',
    decorators: [
        (Story) => (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Story />
            </View>
        ),
    ],
    component: () => <Checkbox value />,
};

export const Types = {
    render: () => {
        return (
            <Layout orientation="vertical" spacing={20}>
                <Checkbox value />
                <Checkbox title="Checkbox Title" value />
                <Checkbox title="Checkbox Title" description="Please enter a description" value />
            </Layout>
        );
    },
};

export const States = {
    render: () => {
        return (
            <Layout orientation="vertical" spacing={20}>
                <Checkbox title="Checkbox Title" description="Please enter a description" />
                <Checkbox title="Checkbox Title" description="Please enter a description" value />
                <Checkbox
                    title="Checkbox Title"
                    description="Please enter a description"
                    disabled
                />
                <Checkbox
                    title="Checkbox Title"
                    description="Please enter a description"
                    value
                    disabled
                />
            </Layout>
        );
    },
};
