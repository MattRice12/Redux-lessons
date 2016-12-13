import React from 'react';

class Friend extends React.Component {
  render() {
    return(
    <ul>
      <li>{this.props.name} - {this.props.status}
      </li>
    </ul>)
  }
}

export default Friend;
