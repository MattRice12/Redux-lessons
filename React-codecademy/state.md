# State `getInitialState:`
  Unlike props, a component's state is not passed in from the outside. A component decides its own state.

  To make a component have state, write a getInitialState function:
  ```
    var Example = React.createClass({
      getInitialState: function () {
        return { mood: 'decent' };
      },

      render: function () {
        return <div></div>;
      }
    });

    <Example />
  ```

  Just like `this.props`, you can use `this.state` from any property on the instructions object.

# Change State `this.setState({...})`
  `this.setState` takes two arguments:
    1. an object that will update the component's state, and
    2. a callback (you basically never need this)

  The most common way to call this.setState is to call a custom function that wraps a this.setState call.

  You can't call this.setState from inside of the render function!
  ```
      toggleMood: function () {
        var newMood = this.state.mood == 'good' ? 'bad' : 'good';
        this.setState({ mood: newMood });
      },
  ```

  ```
    render: function () {
      return (
        <div>
          <h1>I'm feeling {this.state.mood}!</h1>
          <button onClick={this.toggleMood}>
            Click Me
          </button>
        </div>
      );
    }
  ```

#Why can't you call `this.setState` from inside the `render` function?
  If render calls this.setState, you will create an infinite loop because:
    Any time that you call this.setState, this.setState AUTOMATICALLY calls render as soon as the state has changed. Think of this.setState as actually being two things: this.setState, immediately followed by render.
