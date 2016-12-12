# How
  <h1 style={{ color: 'red' }}>Hello world</h1>

  1. The outer curly braces inject JavaScript into JSX. They say, "everything between us should be read as JavaScript, not JSX."

  2. The inner curly braces create a JavaScript object literal. They make this a valid JavaScript object:

# Storing styles in variables
  var styles = {
    marginTop:       "20px",
    backgroundColor: "green"
  };

  <h1 style={styles}>Hello World</h1>

# Naming conventions
  *style names*
    @JS: hyphenated-lowercase
    @React: camelCase

  *style values*
    Almost everything is wrapped in strings.
    However, you can write numbers by themselves, and the units will be assumed to be `px`:
      `{ fontSize: 30 }`

    If you want to use units other than `px`, you can use a string:
      `{ fontSize: "2em" }`
