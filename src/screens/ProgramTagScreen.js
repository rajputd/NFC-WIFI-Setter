import React from 'react';
import InfoBox from '../components/InfoBox.js';

export default class ProgramTagScreen extends React.Component {
  render() {
    return (
      <div style = {styles.container}>
      <div style={styles.box}>
      <p style ={styles.textDisplay}>Place phone on the NFC tag</p>
      </div>
      <img
        src = {require('../assets/img/placeOnNfcImage.png')}
        style = {{width: '50%', height: '50%', display: 'block', paddingTop: '20%', marginLeft: 'auto', marginRight: 'auto'}}
       />
      </div>
    )
  }
}
const styles = {
  container: {
    backgroundColor: '#3d93bc',
    width: '100vw',
    height: '100vh',
    margin: 0
  },
  box:{
    borderStyle:'solid',
    backgroundColor: 'white',
    borderRadius: '25px',
    borderColor:'black',
    borderWidth: 4,
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '80%',
    margin: 'auto'
  },
  textDisplay: {
    fontSize: 50,
    textAlign: 'center',
    color: 'black'
  }
};
