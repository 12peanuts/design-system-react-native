import styled, { css } from '@emotion/native';
import { RadiusSize, typographyStyle } from '../../shared';
import type { TextInputProps } from './TextInput';
import { Text } from '../Text';
import { Button } from '../Button';

type TextInputContainerProps = Pick<
    TextInputProps,
    'type' | 'radius' | 'multiline' | 'height' | 'backgroundColor'
>;

export const TextInputContainer = styled.View<TextInputContainerProps>`
    flex-direction: row;
    justify-content: space-between;
    border-radius: ${(props) => RadiusSize[props.radius || 'Large']};
    padding: 14px 16px;
    margin: 8px 0;
    height: ${(props) => (props.multiline ? props.height || '150px' : 'auto')};

    ${(props) => {
        const { colors } = props.theme;
        switch (props.type) {
            case 'contained':
                return css`
                    background-color: ${props.backgroundColor || colors.gray150};
                `;
            case 'outlined':
                return css`
                    background-color: ${props.backgroundColor || 'transparent'};
                    border: 1px solid ${colors.gray600};
                `;
            case 'underlined':
            default:
                return css`
                    background-color: ${props.backgroundColor || 'transparent'};
                    border-bottom-width: 0.5px;
                    border-bottom-color: ${colors.gray600};
                    padding: 9px 0;
                    margin: 0 0 8px;
                `;
        }
    }}
`;

export const TextInputTitleArea = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TextInputHelpTextArea = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Input = styled.TextInput`
    ${typographyStyle};
    flex: 1;
    padding: 0;
    line-height: 20px;
`;

export const RequiredText = styled(Text)`
    margin-left: 4px;
    color: ${(props) => props.theme.colors.error};
`;

export const ClearButton = styled(Button)`
    margin: -16px -16px -16px 0;
`;
