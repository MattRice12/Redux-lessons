When you separate a container component from a presentational component, the presentational component will always end up like this:
  1. one render function, and
  2. no other properties.


*Stateless Functional Component (SFC)* If you have a component class with nothing but a render function, then you can rewrite that component class in a very different way. Instead of using React.createClass, you can write it as JavaScript function--this is called a stateless functional component!
  SFCs have the following advantages over component classes:
    1.

# Props
  To access an SFC's props, give your SFC a `parameter`. This parameter will automatically be equal to your component's props object. It's customary to name this parameter `props`.
