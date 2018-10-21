import React from 'react';
import InfoBox from '../components/InfoBox.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.box}>
          <p style ={styles.textDisplay}>IS NFC ON? </p>
          <button style={styles.button} onClick={this.props.onClick}>Next</button>
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
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: '80%',
    margin: 'auto',
  },
  button: {
    borderStyle:'solid',
    backgroundColor: '#b2b5b6',
    borderRadius: '25px',
    borderColor:'black',
    borderWidth: 2,
    padding: '8px',
    marginLeft: 20,
    marginBottom: 10

  }
};
