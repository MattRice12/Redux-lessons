# Unmounting Lifecycle Methods: What are they?
  A component's unmounting period occurs when the component is removed from the DOM. This could happen if:
    1. the DOM is rerendered without the component, or
    2. the user navigates to a different website or closes their web browser.

  If a component initiates any methods that require cleanup, then `componentWillUnmount` is where you should put that cleanup.

# Types
  `componentWillUnmount` is the only unmounting lifecycle method.
