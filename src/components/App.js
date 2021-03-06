import React, { Component } from 'react';
import EnterWifiScreen from '../screens/EnterWifiScreen.js';
import FailureScreen from '../screens/FailureScreen.js';
import HomeScreen from '../screens/HomeScreen.js';
import ProgramTagScreen from '../screens/ProgramTagScreen.js';
import './../css/app.css';


 class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       currentScreen: 'Home',
       screenParams: {},
       nfcAvailable: false
     }
   }

  render() {
    const currentScreen = this.state.currentScreen;
    const params = this.state.screenParams;

    return (
      <div>
        {currentScreen === "Home" ? <HomeScreen onClick={() => {this.setState({currentScreen: 'Wifi'})}} /> :
         currentScreen === "Fail" ? <FailureScreen {...params} /> :
         currentScreen === "Wifi" ? <EnterWifiScreen {...params} onClick={() => {this.setState({currentScreen: 'Prog'})}}/> :
         currentScreen === "Prog" ? <ProgramTagScreen {...params} /> : null}
      </div>
    );
  }
}
export default App;
