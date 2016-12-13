class CommentBox extends React.Component {
  constructor() {
    super();

    this.state = {
      showComments: false,
      comments: [
        { id: 1, author: 'Morgan McCircuit', body: 'Great picture!'},
        { id: 2, author: 'Bending Bender', body: 'Excellent stuff' }
      ];

      ...
    }
  }

  render() {
    return(
      <div>
        <CommentForm addComment={this._addComment.bind(this)} />
        ...
      </div>
    )
  }

  _getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment
          author={comment.author}
          body={comment.body}
          key={comment.id} />
      );
    });
  }

  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({ comments: this.state.comments.concat([comment]) });
  }
}
