

class Comment extends React.Component {
  render() {
    return(
      <div>
        <p>{this.props.author}</p>
        <p>{this.props.body}</p>
        <div>
          <a href="#">Delete comment</a>
        </div>
      </div>
    );
  }
}
