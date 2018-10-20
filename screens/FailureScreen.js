import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoBox from '../components/InfoBox.js';

export default class FailureScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    const failMessage = params.failMessage
    return (
      <View>
        <InfoBox content={failMessage} />
      </View>
    );
  }
}
