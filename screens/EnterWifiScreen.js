import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from '../components/Form.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Enter your wifi credentials:</Text>
        <Form />
      </View>
    )
  }
}
