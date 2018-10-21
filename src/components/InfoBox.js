import React from 'react';

export default class InfoBox extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.content}</p>
      </div>
    );
  }
}
