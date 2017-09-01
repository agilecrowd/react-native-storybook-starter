## Create Storybook for React Native

### Install storybook command set `getstorybook`
```
$ npm i -g @storybook/cli
```

### Create React Native app, eject from expo
```
$ create-react-native-app react-native-storybook-starter
$ cd react-native-storybook-starter
$ yarn run eject
```

### Integrate Storybook into React Native app
```
$ getstorybook
$ npm i --save-dev babel-preset-es2015
```
and
```index.ios.js and index.android.js
...
 import App from './App';
-AppRegistry.registerComponent('reactnativestorybookstarter', () => App);
+import StorybookUI from './storybook';
+const __DEV__ == true;
+AppRegistry.registerComponent('reactnativestorybookstarter', () => __DEV__ ? StorybookUI : App);
...
```

![Done](docs/images/screenshot_install_done.png)