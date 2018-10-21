import React from 'react';
import Form from '../components/Form.js';

export default class EnterWifiScreen extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.box}>
          <p style={styles.textDisplay}>Enter your WIFI credentials:</p>
          <Form />
          <button style={styles.button}>Submit
          </button>
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
    paddingBottom: '40px',
    paddingLeft: '10px'
  },
  textDisplay: {
    fontSize: 50,
    textAlign: 'center',
    color: 'black'
  },
  button: {
    borderStyle:'solid',
    backgroundColor: '#b2b5b6',
    borderRadius: '25px',
    borderColor:'black',
    borderWidth: 2,
    padding: '8px',
    marginTop: '25px'
  }
};
