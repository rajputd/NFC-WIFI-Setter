import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class InfoBox extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.content}</Text>
      </View>
    );
  }
}
