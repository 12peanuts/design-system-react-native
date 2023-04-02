import { withTheme } from './withTheme.decorator';

export const decorators = [withTheme];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
