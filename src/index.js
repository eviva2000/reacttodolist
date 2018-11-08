import React from "react";
import ReactDOM from "react-dom";

function Details(props) {
  return <div>{props.desc}</div>;
}

class TodoListItem extends React.Component {
  buttonClicked = e => {
    this.props.onButtonClick(this.props.id);
  };
  render() {
    //this.props.onButtonClick();
    return (
      <li>
        <article>
          <h1>{this.props.taskheader}</h1>
          <h2>{this.props.importance}</h2>
          <button onClick={this.buttonClicked}>Click me</button>
          <Details desc={this.props.description} />
        </article>
      </li>
    );
  }
}

class TodoList extends React.Component {
  state = {
    items: [
      {
        id: 5,
        task: "clean",
        description: "now",
        importance: 0
      },
      {
        id: 999,
        task: "clean2",
        description: "now2",
        importance: 0
      }
    ]
  };
  clicked = id => {
    console.log("clicked", id);
    const nextItems = this.state.items.map(item => {
      if (item.id === id) {
        return Object.assign({}, item, {
          importance: item.importance + 1
        });
      } else {
        return item;
      }
    });
    this.setState({
      items: nextItems
    });
  };
  render() {
    const myCopy = this.state.items.slice();

    myCopy.sort(function(a, b) {
      return b.importance - a.importance;
    });

    const items = myCopy.map(item => {
      return (
        <TodoListItem
          taskheader={item.task}
          importance={item.importance}
          description={item.description}
          onButtonClick={this.clicked}
          id={item.id}
        />
      );
    });
    return <ul>{items}</ul>;
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>Links go here</nav>
        </header>
        <TodoList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
