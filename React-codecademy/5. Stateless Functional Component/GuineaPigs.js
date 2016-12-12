var React = require('react');

// Component Class
var GuineaPigs = React.createClass({
  render: function () {
    var src = this.props.src;
    return (
      <div>
        <h1>Cute Guinea Pigs</h1>
        <img src={src} />
      </div>
    );
  }
});

// Stateless Functional Component
function GuineaPigs (props) {
  return (
  	<div>
      <h1>Cute Guinea Pigs</h1>
      <img src={props.src} />
    </div>
  )
}

module.exports = GuineaPigs;
