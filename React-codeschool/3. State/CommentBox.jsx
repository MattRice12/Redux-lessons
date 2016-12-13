class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false
    };
  },

  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    })
  },

  render() {
    let buttonText = 'Show comments';

    if (this.state.showComments) {
      buttonText = 'Hide comments';
    }

    return(
      <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
    )
  }
}
