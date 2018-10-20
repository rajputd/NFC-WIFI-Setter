import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Form from '../components/Form.js';

export default class EnterWifiScreen extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
      <View style={styles.box}>
        <Text style = {styles.textDisplay}>Enter your wifi credentials:</Text>
        <Form />
        <Button
          title="Submit"
          color="#3D93BC"
          onPress={() => {this.props.navigation.navigate('Program')}}
        />
        <Button
          title="Go to failure screen"
          onPress={() => {this.props.navigation.navigate('Fail', {
            failMessage: 'Something went wrong with your credentials...'
          })}}
        />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3d93bc',
    height: '100%'
  },
  box:{
    marginLeft: 10,
    marginRight: 10,
    marginTop: 100,
    minHeight: 500,
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
    borderStyle: 'solid',
    minHeight: 200
  }
})
