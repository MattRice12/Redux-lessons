# Updating Lifecycle Methods: What are they?
  The first time that a component instance renders, it does not update. A component updates every time that it renders, starting with the second render.

  There are five updating lifecycle methods:
    1. componentWillReceiveProps
    2. shouldComponentUpdate
    3. componentWillUpdate
    4. render
    5. componentDidUpdate

    @componentWillReceiveProps
      This gets called BEFORE rendering begins.
      This gets called ONLY if the component will receive props.

      componentWillReceiveProps automatically gets passed one argument: an object called `nextProps`.

    @shouldComponentUpdate
      shouldComponentUpdate should return either true or false.
        1. If shouldComponentUpdate returns `true`, then nothing noticeable happens.
        2. If shouldComponentUpdate returns false, then the component will not update. None of the remaining lifecycle methods for that updating period will be called, including render.

      shouldComponentUpdate automatically receives two arguments: `nextProps` and `nextState`.

    @componentWillUpdate
      componentWillUpdate receives two arguments: `nextProps` and `nextState`

      You cannot call this.setState from the body of componentWillUpdate.

      The main purpose of componentWillUpdate is to interact with things outside of the React architecture.

      If you need to do non-React setup before a component renders, such as checking the window size or interacting with an API, then componentWillUpdate is a good place to do that.

    @componentDidUpdate
      this gets called AFTER any rendered HTML has finished loading

      componentDidUpdate automatically gets passed two arguments: `prevProps` and `prevState`

      Similar to `componentWillUpdate`, `componentDidUpdate` is usually used for interacting with things outside of the React environment, like the browser or APIs. 
