import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import InfoBox from '../components/InfoBox.js';

export default class ProgramTagScreen extends React.Component {
  render() {
    return (
      <View style = {styles.container}>
      <View style={styles.box}>
      <Text style ={styles.textDisplay}>Place phone on the NFC tag</Text>
        <InfoBox content="Successfully programmed! (Only show up on success)" />
        <Button
          title="Go to failure screen"
          onPress={() => {this.props.navigation.navigate('Fail', {
            failMessage: 'Something went wrong programming the tag...'
          })}}
        />

      </View>
      <View style = {{}}>

      <Image
        source = {require('./../app/img/placeOnNfcImage.png')}
        style = {{width: '50%', height: '50%', alignSelf: 'center', marginTop: '10%'}}

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
    marginTop: 120,
    borderStyle: 'solid'
  }
})
