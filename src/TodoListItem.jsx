import React from "react";
function Details(props) {
  return <div>{props.desc}</div>;
}

export default class TodoListItem extends React.Component {
  buttonClicked = e => {
    this.props.onButtonClick(this.props.id);
  };

  render() {
    //this.props.onButtonClick();

    return (
      <li>
        <article className={this.props.importance > 5 ? "important" : ""}>
          <h1>{this.props.taskheader}</h1>
          <h2>{this.props.importance}</h2>
          <button onClick={this.buttonClicked}>Click me</button>
          <Details desc={this.props.description} />
        </article>
      </li>
    );
  }
}
