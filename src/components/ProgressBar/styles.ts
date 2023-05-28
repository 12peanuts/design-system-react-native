import styled, { css } from '@emotion/native';
import Animated from 'react-native-reanimated';

export const ProgressContainer = styled.View`
    flex: 1;
    justify-content: center;
`;

export const ProgressFullArea = styled.View<{ backgroundColor: string }>`
    background-color: ${(props) => props.backgroundColor};
    border-radius: 999px;
`;

export const Progress = styled(Animated.View)<{ strokeHeight: number; color: string }>`
    border-radius: 999px;

    ${(props) => {
        const { strokeHeight, color } = props;
        return css`
            height: ${`${strokeHeight}px`};
            background-color: ${color};
        `;
    }}
`;
