import React from 'react';
import InfoBox from '../components/InfoBox.js';

export default class FailureScreen extends React.Component {
  render() {
    const failMessage = this.props.failMessage
    return (
      <div style={styles.container}>
        <div style={styles.box}>
          <p style ={styles.textDisplay}>{failMessage} </p>
        </div>
      </div>
    );
  }
}
const styles = {
  container: {
    backgroundColor: '#e36947',
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
    color: 'black',
  },
};
