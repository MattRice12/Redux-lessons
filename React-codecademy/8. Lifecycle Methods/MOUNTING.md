#Mounting Lifecycle Methods
  A component "mounts" when it renders for the first time.

  If you need to do something only the first time that a component renders, then it's probably a job for a mounting lifecycle method!

  There are three mounting lifecycle methods:
    1. componentWillMount
    2. render
    3. componentDidMount

  When a component mounts, it automatically calls these three methods, in order.

  You can call this.setState from within componentWillMount!

  @componentWillMount
    This produces BEFORE whatever is included in the render function.

  @render
  This produces BETWEEN componentWillMound and componentDidMount. It is also an Updating Lifecycle Method, so whatever is contained in here will produce each time the component renders.

  @componentDidMount
    This produces AFTER whatever is included in the render function.

    If your React app uses AJAX to fetch initial data from an API, then componentDidMount is the place to make that AJAX call. More generally, componentDidMount is a good place to connect a React app to external applications, such as web APIs or JavaScript frameworks. componentDidMount is also the place to set timers using setTimeout or setInterval.
