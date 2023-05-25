import styled from '@emotion/native';
import Animated from 'react-native-reanimated';

export const TabItemButton = styled.TouchableOpacity`
    flex: 1;
    padding: 12px 0 14px;
    align-items: center;
`;

export const ActiveBar = styled(Animated.View)`
    height: 2px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    position: absolute;
    left: 0;
    bottom: 0;
`;
