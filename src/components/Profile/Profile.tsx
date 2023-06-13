import React from 'react';
import { useTheme } from '@emotion/react';
import { Avatar, AvatarProps } from './Avatar';
import { Text, TextProps } from '../Text';
import { Layout, LayoutProps } from '../Layout';

const AvatarTitleFontSize: Record<AvatarProps['size'], number> = {
    XSmall: 8,
    Small: 10,
    Medium: 12,
    Large: 16,
    XLarge: 24,
    XXLarge: 32,
};

export interface ProfileProps extends LayoutProps {
    avatarSize?: AvatarProps['size'];
    title?: string;
    subtitle?: string;
    titleProps?: TextProps;
    subtitleProps?: TextProps;
    avatarImage?: AvatarProps['source'];
    avatarActionIcon?: AvatarProps['actionIcon'];
    onPressAvatar?: () => void;
}

export function Profile({
    avatarSize = 'XSmall',
    title,
    subtitle,
    titleProps,
    subtitleProps,
    avatarImage,
    avatarActionIcon,
    onPressAvatar,
    ...props
}: ProfileProps) {
    const { colors } = useTheme();

    return (
        <Layout orientation="horizontal" {...props}>
            <Avatar
                source={avatarImage}
                actionIcon={avatarActionIcon}
                size={avatarSize}
                onPress={onPressAvatar}
                disabled={onPressAvatar === undefined}
            />
            {(title || subtitle) && (
                <Layout spacing={0}>
                    {title && (
                        <Text
                            isBold
                            numberOfLines={1}
                            color={colors.text100}
                            style={{ fontSize: AvatarTitleFontSize[avatarSize] }}
                            {...titleProps}
                        >
                            {title}
                        </Text>
                    )}
                    {subtitle && (
                        <Text
                            numberOfLines={1}
                            color={colors.text200}
                            style={{ fontSize: AvatarTitleFontSize[avatarSize] * 0.8 }}
                            {...subtitleProps}
                        >
                            {subtitle}
                        </Text>
                    )}
                </Layout>
            )}
        </Layout>
    );
}
