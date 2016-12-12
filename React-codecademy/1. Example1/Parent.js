var React = require('react');
var ReactDOM = require('react-dom');
var Child = require('./Child');


var Parent = React.createClass({
  getInitialState: function () {
    return { name: 'Matt Rice' };
  },

  render: function () {
    return <div><Child name={this.state.name}/></div>;
  }
});

ReactDOM.render(<Parent />, document.getElementById('app'));
