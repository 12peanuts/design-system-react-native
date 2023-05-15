import styled, { css } from '@emotion/native';
// import Animated from 'react-native-reanimated';
import { TabItemProps } from './TabItem';
import { TabsContextState } from './TabsProvider';

interface ActiveProps extends Pick<TabItemProps, 'isActive'> {
    tabMenuType: TabsContextState['tabMenuType'];
}

export const TabItemContainer = styled.TouchableOpacity<ActiveProps>`
    flex: 1;
    background-color: ${(props) => props.tabMenuType === 'solid'};
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;

    ${(props) => {
        const { tabMenuType, isActive, theme } = props;
        return css`
            background-color: ${tabMenuType === 'solid'
                ? isActive
                    ? theme.colors.primary
                    : 'black'
                : undefined};
        `;
    }}
`;

// export const ActiveBorder = styled(Animated.View)<ActiveProps>`
//     height: 3px;
//     position: absolute;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background-color: ${(props) => (props.isActive ? 'red' : undefined)};
// `;
