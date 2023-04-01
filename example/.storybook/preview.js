import { View } from "react-native";

export const decorators = [
  (StoryFn) => (
    <View style={{flex: 1, padding: 16}}>
      <StoryFn/>
    </View>)
]

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
