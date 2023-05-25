# Tabs
You can implement the pressable and scrollable Tab component with this.

⚠️ if you want to this component, you need to install [react-native-reanimated(>=2.7.0)](https://github.com/software-mansion/react-native-reanimated) first.

## 🍀 Preview

<img src="./static/tabs.webp" width="150px">

## 📍 Example
define your props that you want to add and then pass them to data props. `TabData` type has a label which display text on the TabMenu.

```ts
import { Image, ImageSourcePropType } from 'react-native';
import { Tabs, TabData } from '@12peanuts/design-system-react-native';

type YourType = TabData & {
    imageSrc: ImageSourcePropType;
};

const tabData: YourType[] = [
    {
        label: 'TabMenu1',
        imageSrc: {
            uri: 'https://picsum.photos/200/300',
        },
    },
    {
        label: 'TabMenu2',
        imageSrc: {
            uri: 'https://picsum.photos/200/400',
        },
    },
    {
        label: 'TabMenu3',
        imageSrc: {
            uri: 'https://picsum.photos/200/500',
        },
    },
];

function Demonstration() {
    return (
        <Layout orientation="horizontal" spacing={20}>
            <Tabs data={tabData} onActiveTabChanged={(activeIndex) => { console.log(activeIndex) }}>
                {tabData.map(({ imageSrc }) => (
                    <Image source={imageSrc} style={{ width: '100%', aspectRatio: 1 / 1 }} />
                ))}
            </Tabs>
        </Layout>
    );
}
```