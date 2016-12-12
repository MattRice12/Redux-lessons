# Stateless components updating their parents' state
  1. A stateful, parent component passes down an `event handler` to a stateless, child component, then
  2. The child component uses that event handler to update its parent's state.

# New concepts/functions

  @Parent
    changeName: function (newName) {
      this.setState({
        name: newName
      })
    },



  @Child
    handleChange: function (e) {
      var name = e.target.value;
      this.props.onChange(name);
    },



  @Child
    render: function () {
        return (
          <div>
            <h1>
              Hey my name is {this.props.name}!
            </h1>
            *<select onChange={this.handleChange}*
              			id="great-names">
              <option value="Frarthur">
                Frarthur
              </option>

              <option value="Gromulus">
                Gromulus
              </option>
