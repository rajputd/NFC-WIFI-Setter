import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoBox from '../components/InfoBox.js';

export default class FailureScreen extends React.Component {
  render() {
    const { params } = this.props.navigation.state;
    const failMessage = params.failMessage
    return (
      <View style={styles.container}>
      <View style={styles.box}>
        <Text style ={styles.textDisplay}>{failMessage} </Text>
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e36947',
    height: '100%'
  },
  box:{
    marginLeft: 10,
    marginRight: 10,
    marginTop: 100,
    minHeight: 350,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    borderStyle:'solid',
    backgroundColor: 'white',
    borderColor:'black',
    borderWidth: 4
  },
  textDisplay: {
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
    marginTop: 80,
    borderStyle: 'solid'
  },
})
