# Set initial state
  Set initial state in the constructor:
    class CommentBox extends React.Component
      *constructor() {
        super();

        this.state = {
          showComments: false
        };*
      }

      render() {
        ...
      }
      ...
    }

# Update state
  `this.setState({showComments: true})`

  Things that can cause state to change:
    Button clicks
    Link clicks
    Form submissions
    AJAX requests
    etc.

# Handling Click Events
  class CommentBox extends React.Component {
    ...
    render() {
      ...
      return(
        ...
          *<button onClick={this._handleClick.bind(this)}>Show comments</button>*
        ...
      );
    }

    \_handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
  }

# Change button text based on state
  class CommentBox extends ReactComponent {
    render() {
      ...
      let buttonText = 'Show comments';

      *if (this.state.showComments) {
        buttonText = 'Hide comments';
      }*
    }

    return(
      ...
        <button onClick={this.\_handleClick.bind(this)}>*{buttonText}*</button>
      ...
    );
  }
