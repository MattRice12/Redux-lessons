# propTypes advantages:
  *Prop Validation*
    Validation can ensure that your `props` are doing what they're supposed to be doing. If props are missing, or if they're present but they aren't what you're expecting, then a warning will print in the console.

  *Prop Documentation*
    Documenting `props` makes it easier to glance at a file and quickly understand the component class inside.

# Where
  Put them at the top of your class:
  ```
    propTypes: {
      message: React.PropTypes.string
    },
  ```
# Naming:
  @name: The name of each property in propTypes should be the name of an expected prop.

  @value: The value of each property in propTypes should fit this pattern:
    `React.PropTypes.data-type`

  @data-types:
    string
    object
    bool
    number
    func
    array

  @isRequired: If you append `.isRequired` to a propType, then you will get a console warning if that prop isn't sent.
    `React.PropTypes.string.isRequired`

# For Stateless Functional Components
  You can't write propTypes in SFC's instructions because SFCs don't have instructions objects

  To write propTypes for a SFC, you define a propTypes object, as a property of the SFC itself. Here's what that looks like:
    ```
      function Example (props) {
        return <h1>{props.message}</h1>;
      }

      Example.propTypes = {
        message: React.PropTypes.string.isRequired
      };
    ```
