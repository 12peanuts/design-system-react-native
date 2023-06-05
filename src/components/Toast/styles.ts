import styled, { css } from '@emotion/native';
import Animated from 'react-native-reanimated';
import { Text } from '@12peanuts/design-system-react-native';
import { ToastProps } from './Toast';

export type StyledPressableProps = Pick<ToastProps, 'type' | 'spacing' | 'color'>;

export const StyledPressable = styled.Pressable<StyledPressableProps>`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-radius: 12px;
    gap: ${(props) => `${props.spacing || 12}px`};

    ${(props) => {
        const { theme, type, color } = props;
        switch (type) {
            case 'contained':
                return css`
                    background-color: ${color || theme.colors.primary};
                `;
            case 'outlined':
            default:
                return css`
                    border-width: 1.5px;
                    border-color: ${color || theme.colors.primary};
                `;
        }
    }};
`;

export const ToastView = styled(Animated.View)`
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 16px;
    height: 56px;
`;

export const WrappedText = styled(Text)`
    flex: 1;
`;
