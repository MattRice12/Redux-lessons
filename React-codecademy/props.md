# What
  Props is a way for one component to pass information to another component

# Passing information
  Passing in a string:
    <MyComponent foo="bar" />

  Passing in information that isn't a string -- use curly braces:
    <Greeting myInfo={["top", "secret", "lol"]} />

  Combinations:
    <Greeting name="Frarthur" town="Flundon" age={2} haunted={false} />

# Displaying the passed-in information
  Put `this.props.name-of-information` in the recipient component class's `render` function's `return` statement

# Event Handlers
  You can pass event handler functions in props.
  But you first have to define event handler functions before you can pass them.
  You define event handler functions as a property on the instructions object

    1. Define event handler:
      var Giver = React.createClass({
        handleClick: function () {
          alert("Hi There!");
        }
      })

    2. Pass event handler into the Recipient class:
      return <Recipient onClick={this.handleClick} />

    3. Call it in Recipient class:
      return (
        <button onClick={this.props.onClick}>Click Me!</button>
      );

  *Naming Conventions*
    1. Event Handler --> `handle_____`
        handleClick
        handleHover
        handleKeyPress

    2. Props --> `on_____`
        onClick
        onHover
        onKeyPress

      @a. Note, that this props name is just an arbitrary name we use by convention. It is not an HTML event listener, nor does it create an event listener.
        The reason it is not an event listener is that it is used in a `component instance` (<Button />); not in an HTML-like JSX element.
        Names like `onClick` only create event listeners if they're used on HTML-like JSX elements.

# this.props.children
  If we wrote <ComponentClass /> as:
    <ComponentClass>...</ComponentClass>
  `this.props.children` would return everything between those tags.

    *Examples*
      @1.
      <BigButton>
        I am a child of BigButton.
      </BigButton>

        #=> `"I am a child of BigButton"`


      @2.
      <BigButton>
        <LilButton />
      </BigButton>

        #=> Whatever `LilButton` component contains

      @3.
      <BigButton />

        #=> `undefined`

  [Array]: If a component has more than one child between its JSX tags, then `this.props.children` will return those children in an array.

  [Non-Array]: If a component has only one child, then `this.props.children` will return the single child, not wrapped in an array.

# Default Props
  If you don't pass in a props, but still call a props, you might get an empty result.
  Defining default props covers situations where you call `this.props.text` without passing `text` in.
  ```
    getDefaultProps: function () {
      return { text: 'BUH' };
    },
  ```
