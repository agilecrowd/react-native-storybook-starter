import { AppRegistry } from 'react-native';
import App from './App';
import StorybookUI from './storybook';
const __DEV__ == true;
AppRegistry.registerComponent('reactnativestorybookstarter', () => __DEV__ ? StorybookUI : App);
