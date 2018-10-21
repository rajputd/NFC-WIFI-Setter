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
};
