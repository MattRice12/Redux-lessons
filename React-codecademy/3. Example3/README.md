# Child Components Update Sibling Components' Props
   1. A child component updates its parent's state, and
   2. The parent passes that state to a sibling component.

# Concepts
  One of the very first things that you learned about components is that they should only have one job.

  You will have:
    @a. One stateless component display information, and
    @b. One different stateless component offer the ability to change that information.

#Steps:
    A stateful component class defines a function that calls this.setState. (Parent.js, lines 11-15)

    The stateful component passes that function down to a stateless component. (Parent.js, line 20)

    That stateless component class defines a function that calls the passed-down function, and that can take an event object as an argument. (Child.js, lines 4-7)

    The stateless component class uses this new function as an event handler. (Child.js, line 14)

    When an event is detected, the parent's state updates. (A user selects a new dropdown menu item)

    The stateful component class passes down its state, distinct from the ability to change its state, to a different stateless component. (Parent.js, line 21)

    That stateless component class receives the state and displays it. (Sibling.js, lines 8-10)

    An instance of the stateful component class is rendered. One stateless child component displays the state, and a different stateless child component displays a way to change the (Parent.js, lines 27-30)
