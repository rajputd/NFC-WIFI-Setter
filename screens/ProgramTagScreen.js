import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import InfoBox from '../components/InfoBox.js';

export default class ProgramTagScreen extends React.Component {
  render() {
    return (
      <View>
        <InfoBox content="Put your phone on the NFC tag" />
        <InfoBox content="Successfully programmed! (Only show up on success)" />
        <Button
          title="Go to failure screen"
          onPress={() => {this.props.navigation.navigate('Fail', {
            failMessage: 'Something went wrong programming the tag...'
          })}}
        />
      </View>
    )
  }
}
