import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import InfoBox from '../components/InfoBox.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
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
        <View style={styles.box}>
          <Text style ={styles.textDisplay}>IS NFC ON? </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3d93bc',
    height: '100%',
  },
  textDisplay: {
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
    marginTop: 120,
    borderStyle: 'solid'
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
  }
});
