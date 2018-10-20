import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pass: ''
    }
  }

  render() {
    return (
      <View>
        <Text>Network Name:</Text>
        <TextInput value={this.state.name} onChangeText={(text) => {this.setState({name: text})}}/>
        <Text>Password</Text>
        <TextInput value={this.state.pass} onChangeText={(text) => {this.setState({name: text})}}/>
      </View>
    );
  }
}
