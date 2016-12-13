
1. Add `_deleteComment(comment)` method to CommentBox

2. Updating the Comment List
  *optomistic updates* -- giving the user immediate visual feedback rather than waiting for the API request to be finished before updating component state.
    @a. do this by wrapping the spread operator in brackets `[...this.state.comments]` -- this clones the existing array

    @b. store the index of the deleted comment in a variable

    @c. remove the comment from the array

    @d. set state of comments to the new array of comments

3. Pass a callback prop to Comment

4. Adding an Event Listener to the Delete Button
  `_handleDelete(e)`

5. Persist Comments to a Remote Server
  Make the AJAX call
