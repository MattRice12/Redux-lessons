# Controlled Component vs. Uncontrolled Component
  *Uncontrolled Component*
    An uncontrolled component is a component that maintains its own internal state.

  *Controlled Component*
    A controlled component is a component that does not maintain any internal state. Since a controlled component has no state, it must be controlled by someone else.

# Example
  *Uncontrolled*
    <input /> keeps track of its own text. You can ask it what its text is at any time, and it will be able to tell you.

    The fact that <input /> keeps track of information makes it an uncontrolled component. It maintains its own internal state, by remembering data about itself.

  *Controlled*
    A controlled component, on the other hand, has no memory. If you ask it for information about itself, then it will have to get that information through props. Most React components are controlled.

    In React, when you give an <input /> a value attribute, then something strange happens: the <input /> BECOMES controlled. It stops using its internal storage. This is a more 'React' way of doing things.
