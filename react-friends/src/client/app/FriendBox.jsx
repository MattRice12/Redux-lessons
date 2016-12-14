import React from 'react';
import Friend from './Friend.jsx';

class FriendBox extends React.Component {
  constructor() {
    super();

    this.state = {
      friends: []
    }
  }

  componentWillMount() {
    this.setState({
      friends: [
          { id: 1, name: "Jimmy", status: "Best Friend" },
          { id: 2, name: "Kimmy", status: "Good Friend" },
          { id: 3, name: "Timmy", status: "Acquaintence" }
      ]
    })
  }

  _getFriends() {
    return this.state.friends.map((friend) => {
      return (
        <Friend
          name={friend.name}
          status={friend.status}
          key={friend.id} />
      );
    });
  }

  _toggleFriend() {
    var newShow;
    console.log(newShow);
    if (friend.show === true) {
      newShow = false;
    } else {
      newShow = true;
    }
    this.friend.setState({ show: newShow })
    console.log(show)
  }

  render() {
    return (<div>
        <ul>{this._getFriends()}</ul>
      </div>
    )
  }
}

export default FriendBox;
