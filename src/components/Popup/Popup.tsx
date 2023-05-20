import React from 'react';
import { GestureResponderEvent, Modal, ModalProps } from 'react-native';
import { PopupBackground, PopupCloseButton, PopupContainer } from './Popup.styles';
import { PopupImage } from './PopupImage';
import { PopupText } from './PopupText';
import { PopupButton } from './PopupButton';
import type { RadiusType } from '../../shared';
import type { ButtonProps } from '../Button';
import CloseIcon from '../../assets/images/ic-20-regular-close.png';

export interface PopupProps extends ModalProps {
    radius?: RadiusType;
    hasCloseButton?: boolean;
    closeButtonProps?: ButtonProps;
    visible?: boolean;
    onValueChanged?: ((value: boolean) => void) | null | undefined;
}

const PopupMain: React.FC<PopupProps> = ({
    radius,
    visible = false,
    onValueChanged,
    hasCloseButton = false,
    closeButtonProps,
    children,
    ...props
}) => {
    const closePopup = (event: GestureResponderEvent) => {
        if (closeButtonProps?.onPress) closeButtonProps.onPress(event);
        if (onValueChanged) onValueChanged(!visible);
    };

    const handlePressBackground = (event: GestureResponderEvent) => {
        if (!hasCloseButton) closePopup(event);
    };

    return (
        <Modal visible={visible} {...props}>
            <PopupBackground onPress={handlePressBackground}>
                <PopupContainer radius={radius}>
                    {hasCloseButton && (
                        <PopupCloseButton
                            type="ghost"
                            iconSrc={CloseIcon}
                            onPress={closePopup}
                            {...closeButtonProps}
                        />
                    )}
                    {children}
                </PopupContainer>
            </PopupBackground>
        </Modal>
    );
};

export const Popup = Object.assign(PopupMain, {
    Image: PopupImage,
    Text: PopupText,
    Button: PopupButton,
});
