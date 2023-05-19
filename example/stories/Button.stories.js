import React from 'react';
import { Layout, Button } from '@12peanuts/design-system-react-native';

export default {
    title: 'Component/Button',
    component: Button,
};

export const Default = {
    args: {
        activeOpacity: 0.7,
        type: 'contained',
        radius: 'Large',
        textProps: {
            varient: 'subtitle1',
            isBold: true,
        },
        iconColor: 'white',
        iconSrc: undefined,
        text: 'Button',
        spacing: 8,
        reverse: false,
    },
};

export const TextButton = {
    render: () => {
        return (
            <Layout orientation="vertical" spacing={20}>
                <Button text="Button" type="contained" />
                <Button text="Button" type="outlined" />
                <Button text="Button" type="ghost" />
            </Layout>
        );
    },
};

export const IconButton = {
    render: () => {
        return (
            <Layout orientation="horizontal" spacing={20}>
                <Button iconSrc={{ uri: 'https://picsum.photos/200/300' }} type="contained" />
                <Button iconSrc={{ uri: 'https://picsum.photos/200/300' }} type="outlined" />
                <Button iconSrc={{ uri: 'https://picsum.photos/200/300' }} type="ghost" />
            </Layout>
        );
    },
};

export const IconTextButton = {
    render: () => {
        return (
            <Layout orientation="vertical" spacing={20}>
                <Button
                    text="Button"
                    iconSrc={{ uri: 'https://picsum.photos/200/300' }}
                    type="contained"
                />
                <Button
                    text="Button"
                    iconSrc={{ uri: 'https://picsum.photos/200/300' }}
                    type="outlined"
                />
                <Button
                    text="Button"
                    iconSrc={{ uri: 'https://picsum.photos/200/300' }}
                    type="ghost"
                    reverse
                />
            </Layout>
        );
    },
};
