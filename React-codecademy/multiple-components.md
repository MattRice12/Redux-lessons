# Import
  To render one component inside of another, you have to require that component.
  If your filepath doesn't have a file extension, then ".js" is assumed.
    *Inside ProfilePage.js*
      ```
        var React = require('react');
        var ReactDOM = require('react-dom');
        var NavBar = require('./NavBar');

        var ProfilePage = React.createClass({
        render: function () {
          return (
            <div>
              <NavBar />
            </div>
          );
        }
        });
      ```

# module.exports
  You don't need to import the whole file; you only need to import the `NavBar` component class.

    1. In one file, declare module.exports to be equal to an expression
      `module.exports = NavBar;`

    2. In a different file, use require to import the first file. `require` won't return the entire first file; it will only return the first file's module.exports value.
        `var NavBar = require('./NavBar');`
