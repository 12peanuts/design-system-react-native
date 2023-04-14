import React from 'react';
import { Image, TouchableOpacityProps } from 'react-native';
import { CheckControlContainer } from './Checkbox.styles';
import CheckIconSrc from '../../assets/images/ic-20-regular-check.png';

export type CheckControlProps = {
    value?: boolean;
    onValueChange?: ((value: boolean) => void) | null | undefined;
    checkColor?: string;
    disabledCheckColor?: string;
    activeCheckBackgroundColor?: string;
    inactiveCheckBackgroundColor?: string;
    disabledCheckBackgroundColor?: string;
    checkBorderColor?: string;
} & TouchableOpacityProps;

export const CheckControl: React.FC<CheckControlProps> = ({
    value,
    onValueChange,
    disabled,
    activeOpacity = 0.7,
    checkColor,
    disabledCheckColor,
    activeCheckBackgroundColor,
    inactiveCheckBackgroundColor,
    disabledCheckBackgroundColor,
    checkBorderColor,
}) => {
    const handlePress = () => {
        if (onValueChange) onValueChange(!value);
    };

    return (
        <CheckControlContainer
            activeOpacity={activeOpacity}
            value={value}
            disabled={disabled}
            onPress={handlePress}
            backgroundColor={
                disabled
                    ? disabledCheckBackgroundColor
                    : value
                    ? activeCheckBackgroundColor
                    : inactiveCheckBackgroundColor
            }
            borderColor={checkBorderColor}
        >
            {value && (
                <Image
                    source={CheckIconSrc}
                    style={{ tintColor: disabled ? disabledCheckColor : checkColor }}
                />
            )}
        </CheckControlContainer>
    );
};
