import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen.js';
import FailureScreen from './screens/FailureScreen.js';
import EnterWifiScreen from './screens/EnterWifiScreen.js';
import ProgramTagScreen from './screens/ProgramTagScreen.js';

import { createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Fail: FailureScreen,
  Wifi: EnterWifiScreen,
  Program: ProgramTagScreen
}, {
  initialRouteName: 'Home'
});

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
