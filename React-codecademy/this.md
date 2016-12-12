# What
  This refers to the instructions object being passed to React.createClass.
    React.createClass({
      food: 'ice cream',
      drink: 'coca cola',
      render: function() {
        ...
      }
    })

# Where
  You are likely to see `this` inside of an object that is being passed to React.createClass.

# Example
```
  var IceCreamGuy = React.createClass({
  food: 'ice cream',

  render: function () {
    return <h1>I like {this.food}.</h1>;
  }
  });
```
