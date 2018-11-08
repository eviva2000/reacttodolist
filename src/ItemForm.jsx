import React from "react";

export default class ItemForm extends React.Component {
  state = {
    task: "",
    description: ""
  };
  handleChangeTask = event => {
    this.setState({ task: event.target.value });
  };
  handleChangeDescription = event => {
    this.setState({ description: event.target.value });
  };
  handleSubmit = event => {
    console.log("A name was submitted: " + this.state.task);
    event.preventDefault();
    this.props.itemAddedCallback({
      task: this.state.task,
      description: this.state.description,
      importance: 0,
      id: Math.random()
    });
  };

  /*
  id: 5,
        task: "clean",
        description: "now",
        importance: 0
  */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Task:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChangeTask}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChangeDescription}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
