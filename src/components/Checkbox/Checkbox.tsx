import React from 'react';
import { useTheme } from '@emotion/react';
import { Layout } from '../Layout';
import { Text, TextProps } from '../Text';
import { DescriptionText, TextArea } from './Checkbox.styles';
import { CheckControl, CheckControlProps } from './CheckControl';

export interface CheckboxProps extends CheckControlProps {
    title?: string;
    description?: string;
    titleTextProps?: TextProps;
    descriptionTextProps?: TextProps;
    disabled?: boolean;
    disabledTextColor?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    title,
    description,
    titleTextProps,
    descriptionTextProps,
    disabled = false,
    value,
    onValueChange,
    style,
    checkColor,
    checkBorderColor,
    disabledCheckColor,
    activeCheckBackgroundColor,
    disabledCheckBackgroundColor,
    inactiveCheckBackgroundColor,
    disabledTextColor = '#DFDFDF',
    shape,
}) => {
    const { colors } = useTheme();

    return (
        <Layout orientation="horizontal" style={style}>
            <CheckControl
                value={value}
                onValueChange={onValueChange}
                disabled={disabled}
                checkColor={checkColor || colors.white}
                checkBorderColor={checkBorderColor || colors.gray400}
                disabledCheckColor={disabledCheckColor || colors.gray400}
                activeCheckBackgroundColor={activeCheckBackgroundColor || colors.primary}
                disabledCheckBackgroundColor={disabledCheckBackgroundColor || colors.gray300}
                inactiveCheckBackgroundColor={inactiveCheckBackgroundColor || colors.white}
                shape={shape}
            />
            <TextArea>
                {title && (
                    <Text
                        color={disabled ? disabledTextColor : titleTextProps?.color}
                        {...titleTextProps}
                    >
                        {title}
                    </Text>
                )}
                {description && (
                    <DescriptionText
                        varient={descriptionTextProps?.varient || 'body2'}
                        color={
                            disabled
                                ? disabledTextColor
                                : descriptionTextProps?.color || colors.gray350
                        }
                        {...descriptionTextProps}
                    >
                        {description}
                    </DescriptionText>
                )}
            </TextArea>
        </Layout>
    );
};
