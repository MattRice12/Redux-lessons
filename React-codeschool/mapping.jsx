class StoryBox extends React.Component {
  render() {
    ...
    const topicsList = ['HTML', 'JavaScript', 'React'];

    return (
      <div>
        ...
        <ul>
          {topicsList.map( topic => <li>{topic}</li> )}
        </ul>
      </div>
    );
  }
}
