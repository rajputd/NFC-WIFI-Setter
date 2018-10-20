import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Form from '../components/Form.js';

export default class EnterWifiScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Enter your wifi credentials:</Text>
        <Form />
        <Button
          title="Go to program nfc tag screen"
          onPress={() => {this.props.navigation.navigate('Program')}}
        />
        <Button
          title="Go to failure screen"
          onPress={() => {this.props.navigation.navigate('Fail', {
            failMessage: 'Something went wrong with your credentials...'
          })}}
        />
      </View>
    )
  }
}
