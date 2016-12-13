#What:
  Lifecycle methods in React are functions that get called during certain phases that components go through.

1. We call the setState method when data is received from the API server

2. We need to call `_fetchComments` before render() is called.
  Do this with Lifecycle methods.

3. Order:
  constructor()
  componentWillMount()
  render()
  componentDidMount()
  componentWillUnmount()

4. put `_fetchComments()` inside the `componentWillMount` method is called

5. *Polling* In order to check whether new comments are added, we can periodically check the server for updates using polling.
  Since `componentDidMount` is called after the component is rendered, this is the perfect place to use polling.

  React optimizes the rendering process by only updating the DOM when changes are detected on the resulting markup

  So if we call the server every 5 seconds, this doesn't cause any problems with the DOM because we only update the DOM when there are changes.

6. Memory Leaks on Page Changes
  Preventing Memory Leaks:
    Make each component responsible for removing any timers it has created. We will remove the timer on the `componentWillUnmount` method
