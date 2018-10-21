import React from 'react';
import InfoBox from '../components/InfoBox.js';

export default class ProgramTagScreen extends React.Component {
  render() {
    return (
      <div style = {styles.container}>
      <div style={styles.box}>
      <p style ={styles.textDisplay}>Place phone on the NFC tag</p>
        <InfoBox content="Successfully programmed! (Only show up on success)" />
      </div>
      <img
        src = {require('../assets/img/placeOnNfcImage.png')}
        style = {{width: '50%', height: '50%', alignSelf: 'center', marginTop: '10%'}}
       />
      </div>
    )
  }
}
const styles = {
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
};
