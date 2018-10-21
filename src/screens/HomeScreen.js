import React from 'react';
import InfoBox from '../components/InfoBox.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.box}>
          <p style ={styles.textDisplay}>IS NFC ON? </p>
        </div>
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
  textDisplay: {
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
  },
  box:{
    borderStyle:'solid',
    backgroundColor: 'white',
    borderRadius: '25px',
    borderColor:'black',
    borderWidth: 4,
    // position: 'relative',
    // top: '150px',
    // left: '80px',
    // right: '200px',
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '80%',
    margin: 'auto',

  }
};
