import React from 'react';
import {render} from 'react-dom';
import FriendBox from './FriendBox.jsx';
import Friend from './Friend.jsx';

class App extends React.Component {
  render () {
    return <div>
      <h1>Your Friends App</h1>
      <FriendBox />
    </div>;
  }
}

render(<App/>, document.getElementById('app'));
