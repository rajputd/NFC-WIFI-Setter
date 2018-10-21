import React from 'react';
import Form from '../components/Form.js';

export default class EnterWifiScreen extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.box}>
          <p style={styles.textDisplay}>Enter your wifi credentials:</p>
          <Form />
        </div>
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
};
