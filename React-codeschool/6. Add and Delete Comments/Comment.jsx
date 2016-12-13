class Comment extends React.Component {
  render() {
    return(
      ...
        <a href="#" onClick={this._handleDelete.bind(this)}>DeleteComment</a>
      ...
    );
  }

  _handleDelete(e) {
    e.preventDefault();
    if (confirm('Are you sure?')) {
      this.props.onDelete(this.props.comment);
    }
  }
}
