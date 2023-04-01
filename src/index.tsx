import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package '@12peanuts/design-system-react-native' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type DesignSystemReactNativeProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'DesignSystemReactNativeView';

export const DesignSystemReactNativeView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<DesignSystemReactNativeProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
