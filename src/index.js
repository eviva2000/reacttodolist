import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./ItemForm";

import TodoList from "./TodoList";

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
