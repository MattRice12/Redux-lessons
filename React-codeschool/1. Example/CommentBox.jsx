
class CommentBox extends React.Component {
  render() {
    return(
      <div>
        <h3>Comments</h3>
        <h4>2 comments</h4>
        <div>
          <Comment
            author="Morgan McCircuit"
            body="Great picture!" />
          <Comment
            author="Bending Bender"
            body="Excellent stuff!" />
        </div>
      </div>
    )
  }
}
