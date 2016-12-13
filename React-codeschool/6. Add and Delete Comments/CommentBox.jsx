class CommentBox extends React.Component {
  ...
  componentWillMount() {
    _fetchComments();
  }

  _fetchComments() {
    jQuery.ajax({
      method: 'GET',
      url: '/api/comments',
      success: (comments) => {
        this.setState({ comments })
      }
    })
  }

  _getComments() {
    return this.state.comments.map(comment => {
      return (
        <Comment
          key={comment.id}
          comment={comment}
          onDelete={this._deleteComment.bind(this)} />
      )
    })
  }

  _addComment(author, body) {
    const comment = { author, body };

    jQuery.post(`/api/comments`, { comment }).success(newComment => {
      this.setState({ comments: this.state.comments.concat([newComment]) });
    });
  }

  componentDidMount() {
    this._timer = setInterval(() => this._fetchComments(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this._timer);
  }

  _deleteComment(comment) {

    jQuery.ajax({
      method: 'DELETE',
      url: `/api/comments/${comment.id}`
    });

    const comments = [...this.state.comments];
    const commentIndex = comments.indexOf(comment);
    comments.splice(commentIndex, 1);

    this.setState({ comments });
  }
}
