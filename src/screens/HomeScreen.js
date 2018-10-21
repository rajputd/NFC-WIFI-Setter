import React from 'react';
import InfoBox from '../components/InfoBox.js';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <InfoBox content="Checking Wifi..." />
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
};
