import styled, { css } from '@emotion/native';
import { TabItemProps } from './TabItem';
import { TabMenuContextState, TabsContextState } from './TabsProvider';
import { ScreenPadding } from '../../shared';

type TabItemContainerProps = {
    tabMenuColor: TabMenuContextState['tabMenuColor'];
    tabMenuHorizontalPadding: TabMenuContextState['tabMenuHorizontalPadding'];
    tabMenuVerticalPadding: TabMenuContextState['tabMenuVerticalPadding'];
} & Omit<ActiveProps, 'activeBarHeight'>;

interface ActiveProps extends Pick<TabItemProps, 'isActive'> {
    activeBarHeight: TabsContextState['activeBarHeight'];
    tabMenuType: TabsContextState['tabMenuType'];
    activeColor: TabsContextState['activeColor'];
}

export const TabItemContainer = styled.TouchableOpacity<TabItemContainerProps>`
    flex: 1;
    align-items: center;
    padding: 12px 16px;

    ${(props) => {
        const {
            tabMenuType,
            isActive,
            theme,
            activeColor,
            tabMenuColor,
            tabMenuVerticalPadding,
            tabMenuHorizontalPadding,
        } = props;
        return css`
            padding-top: ${ScreenPadding[tabMenuVerticalPadding]};
            padding-bottom: ${ScreenPadding[tabMenuVerticalPadding]};
            padding-left: ${ScreenPadding[tabMenuHorizontalPadding]};
            padding-right: ${ScreenPadding[tabMenuHorizontalPadding]};
            background-color: ${tabMenuType === 'solid'
                ? isActive
                    ? activeColor || theme.colors.primary
                    : tabMenuColor
                : tabMenuColor};
        `;
    }}
`;

export const ActiveBar = styled.View<ActiveProps>`
    height: ${(props) => `${props.activeBarHeight}px`};
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;

    ${(props) => {
        const { activeBarHeight, isActive, activeColor, theme } = props;
        return css`
            height: ${activeBarHeight}px;
            background-color: ${isActive ? activeColor || theme.colors.primary : undefined};
        `;
    }}
`;
