# Create and Initialize directory
  mkdir react-hello-world
  cd react-hello-world
  npm init

# Install Webpack
  npm i webpack -S

  touch webpack.config.js
    ```
      var webpack = require('webpack');
      var path = require('path');

      var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
      var APP_DIR = path.resolve(__dirname, 'src/client/app');

      var config = {
        entry: APP_DIR + '/index.jsx',
        output: {
          path: BUILD_DIR,
          filename: 'bundle.js'
        }
      };

      module.exports = config;
    ```

# Create index.jsx
  mkdir -p src/client/app
  touch src/client/app/index.jsx

# Generate bundle.js
  ./node_modules/.bin/webpack -d

# Create index.html in ./src/client (in root if using server)
  ```
    <html>
      <head>
        <meta charset="utf-8">
        <title>React.js using NPM, Babel6 and Webpack</title>
        <link rel="stylesheet" href="/style/main.css">
      </head>
      <body>
        <div id="app" />
        <script src="public/bundle.js" type="text/javascript"></script>
      </body>
    </html>
  ```

  if you put index.html in root -->
    ```
      <script src="./src/client/public/bundle.js" type="text/javascript"></script>
    ```

# Add stylesheet
  mkdir style
  touch main.css
  touch style/main.scss

  sass style/main.scss main.css
  sass --watch style/main.scss:main.css


# Setup Babel-Loader
  npm i babel-loader babel-preset-es2015 babel-preset-react -S

  touch .babelrc
    ```
      {
        "presets": ["es2015", "react"]
      }
    ```

# Tell Webpack to use the babel-loader
  open webpack.config.js
  ```
    // Existing Code ....
    var config = {
      // Existing Code ....
      module : {
        loaders : [
          {
            test : /\.jsx?/,
            include : APP_DIR,
            loader : 'babel'
          }
        ]
      }
    }
  ```
# Install babel-core
  npm install --save-dev babel-core

# Install react AND react-dom
  npm i react react-dom -S

# Update the bundle file
  ./node_modules/.bin/webpack -d

# Auto-update bundle file
  ./node_modules/.bin/webpack -d --watch

# Create root component
  ./src/client/app/index.jsx
    ```
      import React from 'react';
      import {render} from 'react-dom';

      class App extends React.Component {
        render () {
          return <p> Hello React!</p>;
        }
      }

      render(<App/>, document.getElementById('app'));
    ```

# Run webpack in watch mode
  update package.json:
    ```
      {
        // ...
        "scripts": {
          "dev": "webpack -d --watch",
          "build" : "webpack -p"
        },
        // ...
      }
    ```

# Run npm server
  npm install webpack-dev-server --save-dev

  place index.html in root file

  update package.json:
    ```
      {
        // ...
        "scripts": {
          "start": "node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js",
        },
        // ...
      }
    ```
  update index.html:
    ```
      <script src="./src/client/public/bundle.js" type="text/javascript"></script>
    ```

  npm run start
  localhost:8080

# Create more components
```
  import React from 'react';

  class AwesomeComponent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {likesCount : 0};
      this.onLike = this.onLike.bind(this);
    }

    onLike () {
      let newLikesCount = this.state.likesCount + 1;
      this.setState({likesCount: newLikesCount});
    }

    render() {
      return (
        <div>
          Likes : <span>{this.state.likesCount}</span>
          <div><button onClick={this.onLike}>Like Me</button></div>
        </div>
      );
    }
  }

  export default AwesomeComponent;
```

# Include in index.jsx
  ```
    import AwesomeComponent from './AwesomeComponent.jsx';
  ```
