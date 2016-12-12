# If statements
  The if statement is located inside of the render function, but before the return statement. This is pretty much the only way that you will ever see an if statement used in a render function.


# Event Listeners
  An *event handler* is a function that gets called in response to an event. E.g.,

  In React, you define *event handlers* as property values on the instructions object.
  ```
    React.createClass({
      myFunc: function () {
        alert('Stop it.');
      },

      render: function () {
        return (
          <div onHover={this.myFunc}>Click Me</div>;
          );
        }
      }
    });
  ```
