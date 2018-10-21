import React from 'react';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pass: ''
    }
  }

  render() {
    return (
      <div>
        <p>Network Name:</p>
        <input type="text" value={this.state.name} onChange={(e) => {this.setState({name: e.target.value})}}/>
        <p>Password</p>
        <input type="password" value={this.state.pass} onChange={(e) => {this.setState({pass: e.target.value})}}/>
      </div>
    );
  }
}
