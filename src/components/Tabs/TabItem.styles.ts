import styled, { css } from '@emotion/native';
import { TabItemProps } from './TabItem';
import { TabsContextState } from './TabsProvider';

interface ActiveProps extends Pick<TabItemProps, 'isActive'> {
    tabMenuType: TabsContextState['tabMenuType'];
    activeColor: TabsContextState['activeColor'];
}

export const TabItemContainer = styled.TouchableOpacity<ActiveProps>`
    flex: 1;
    align-items: center;
    padding: 12px 16px;

    ${(props) => {
        const { tabMenuType, isActive, theme, activeColor } = props;
        return css`
            background-color: ${tabMenuType === 'solid'
                ? isActive
                    ? activeColor || theme.colors.primary
                    : 'black'
                : undefined};
        `;
    }}
`;

export const ActiveBar = styled.View<ActiveProps>`
    height: 3px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) =>
        props.isActive ? props.activeColor || props.theme.colors.primary : undefined};
`;
