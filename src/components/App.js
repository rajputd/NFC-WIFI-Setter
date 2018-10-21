import React, { Component } from 'react';
import EnterWifiScreen from '../screens/EnterWifiScreen.js';
import FailureScreen from '../screens/FailureScreen.js';
import HomeScreen from '../screens/HomeScreen.js';
import ProgramTagScreen from '../screens/ProgramTagScreen.js';
import './../css/app.css';

 class App extends Component{
  render() {
    return (
      //<FailureScreen failMessage = 'Something went wrong' />
      <ProgramTagScreen/>
    );
  }
}
export default App;
