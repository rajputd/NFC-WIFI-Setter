import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import InfoBox from '../components/InfoBox.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <InfoBox content="Checking Wifi..." />
        <Button
          title="Go to forum screen"
          onPress={() => {this.props.navigation.navigate('Wifi')}}
        />
        <Button
          title="Go to failure screen"
          onPress={() => {this.props.navigation.navigate('Fail', {
            failMessage: 'Please activate your NFC settings!'
          })}}
        />
      </View>
    )
  }
}
