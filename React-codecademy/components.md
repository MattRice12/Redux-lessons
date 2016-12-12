# What is a component
A component is a small, reusable chunk of code that is responsible for one job. That job is often to render some HTML.

# Example
```
  var React = require('react');
  var ReactDOM = require('react-dom');

  var MyComponentClass = React.createClass({
    render: function() {
      return <h1>Hello world</h1>
    }
  });

  ReactDOM.render(
    <MyComponentClass />,
    document.getElementById('app')
  );
```

# require('react');
  This returns a JavaScript object--the React library. This library contains methods that you need in order to use React. These methods are for pure React purposes, such as creating components or writing JSX elements. These methods do NOT interact with the DOM.
  @methods:
    React.createElement
    React.createClass

# require('react-dom');
  This also returns a JavaScript object, which contains React-related methods. However, these methods are for interacting with the DOM.

# React.createClass
  Every component must come from a component class. Once you have a component class, then you can use that class to produce as many components as you want. Component class variable names must begin with capital letters.

  1. *arguments* React.createClass takes one argument. That argument must be a JavaScript object. This object will act as a set of instructions, explaining to your component class how to build a React component.

  2. *render* The argument MUST include a render function. A render function is a property whose @name is `render` and whose @value is `a function`.
    Inside a render function, you can also put simple calculations that need to happen right before a component renders.

  3. *return* A render function MUST have a `return` statement. Usually this return statement returns a JSX expression.

  4. *Summary*
    A Component Class MUST have a render function.
    A Render Function MUST have a return statement.
    A Return Statement USUALLY returns a JSX expression.

# Use a React Component
  Write a JSX @element. Instead of naming your JSX element something like h1 or div, give it the same name as the Component Class. E.g., `<MyComponentClass />`.

# Process

  1. `ReactDOM.render` will tell `<MyComponentClass />` to call its `render` function.

  2. `<MyComponentClass />` will call its `render` function, `returning <h1>Hello world</h1>`.

  3. `ReactDOM.render` will take that `<h1>Hello world</h1>` and add it to the `virtual DOM`, eventually making it visible on the screen.
