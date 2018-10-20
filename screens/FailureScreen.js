import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoBox from '../components/InfoBox.js';

export default class FailureScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>This is the Failure Screen</Text>
        <InfoBox />
      </View>
    );
  }
}
