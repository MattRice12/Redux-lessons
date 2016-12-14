import React from 'react';

class Friend extends React.Component {
  constructor() {
    super();

    this.state = {
      showFriend: false,
      message: "Show",
      nameColor: 'black',
      nameSize: 20
    }
  }

  _handleButtonClick() {
    let message;

    message = (this.state.message == "Show") ? "Hide" : "Show"

    this.setState({
      showFriend: !this.state.showFriend,
      message: message
    })
  }

  _handleNameClick() {
    const COLORS = ['black', 'red', 'green']
    const SIZE = [20, 30, 40]
    var i = COLORS.indexOf(this.state.nameColor)

    i = (i < 2) ? i + 1 : 0

    this.setState({
      nameColor: COLORS[i],
      nameSize: SIZE[i]
    });
  }

  render() {
    let showFriend;
    let changeColor;

    let visible = <span>{this.props.status}</span>
    if (this.state.showFriend) { showFriend = visible; }

    changeColor = <div className="name" onClick={this._handleNameClick.bind(this)} style={{color: this.state.nameColor, fontSize: this.state.nameSize}}>{this.props.name}</div>

    return(
      <h4>
        <li>
          {changeColor}

          <button onClick={this._handleButtonClick.bind(this)}>{this.state.message}</button>

          {showFriend}
        </li>
      </h4>
    );
  }
}

export default Friend;
