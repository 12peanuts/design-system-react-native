import { join } from 'path';
import { name, source } from '@12peanuts/design-system-react-native/package.json';

export const presets = ['module:metro-react-native-babel-preset'];
export const plugins = [
    [
        'module-resolver',
        {
            extensions: ['.tsx', '.ts', '.js', '.json'],
            alias: {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                [name]: join(__dirname, '..', source),
            },
        },
    ],
    'react-native-reanimated/plugin',
];
