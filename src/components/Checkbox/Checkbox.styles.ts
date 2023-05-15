import styled, { css } from '@emotion/native';
import type { CheckboxProps } from './Checkbox';
import { Text } from '../Text';
import { Layout } from '../Layout';
import { RadiusSize } from '../../shared';

type CheckboxControlContainerProps = Pick<CheckboxProps, 'value' | 'radius'> & {
    backgroundColor?: string;
    borderColor?: string;
};

export const CheckboxContainer = styled(Layout)`
    flex: 1;
`;

export const CheckControlContainer = styled.TouchableOpacity<CheckboxControlContainerProps>`
    border-radius: ${(props) => RadiusSize[props.radius || 'Medium']};
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    width: 24px;

    ${(props) => {
        return css`
            border: ${props.value ? '0' : '1px'} solid ${props.borderColor};
            background-color: ${props.backgroundColor};
        `;
    }};
`;

export const TextArea = styled.View`
    flex: 1;
    justify-content: center;
    margin-left: 10px;
`;

export const DescriptionText = styled(Text)`
    margin-top: 4px;
`;
