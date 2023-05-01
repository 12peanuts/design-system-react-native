import React from 'react';
import { StyleProp, TextInputProps as TextInputPropsBase, View, ViewStyle } from 'react-native';
import type { RadiusType } from '../../shared';
import { Text, TextProps } from '../Text';
import {
    Input,
    ClearButton,
    RequiredText,
    TextInputContainer,
    TextInputHelpTextArea,
    TextInputTitleArea,
} from './TextInput.styles';
import CleanIcon from '../../assets/images/ic-20-solid-clean.png';

type TextInputType = 'contained' | 'outlined' | 'underlined';
export interface TextInputProps extends TextInputPropsBase {
    type?: TextInputType;
    title?: string;
    required?: boolean;
    hasError?: boolean;
    helpText?: string;
    radius?: RadiusType;
    style?: StyleProp<ViewStyle>;
    textProps?: TextProps;
    canClean?: boolean;
}

export const TextInput: React.FC<TextInputProps> = ({
    title,
    required,
    helpText,
    hasError,
    type,
    radius,
    style,
    canClean,
    onChangeText,
    textProps,
    ...props
}) => {
    const handleChangeText = (text: string) => {
        if (onChangeText) onChangeText(text);
    };

    return (
        <View style={style}>
            {title && (
                <TextInputTitleArea>
                    <Text isBold varient="h6">
                        {title}
                    </Text>
                    {required && (
                        <RequiredText isBold varient="h6">
                            *
                        </RequiredText>
                    )}
                </TextInputTitleArea>
            )}
            <TextInputContainer type={type} radius={radius}>
                <Input onChangeText={handleChangeText} {...textProps} {...props} />
                {canClean && (
                    <ClearButton
                        type="ghost"
                        iconSrc={CleanIcon}
                        onPress={() => handleChangeText('')}
                    />
                )}
            </TextInputContainer>
            {helpText && (
                <TextInputHelpTextArea>
                    <Text>{helpText}</Text>
                </TextInputHelpTextArea>
            )}
        </View>
    );
};
