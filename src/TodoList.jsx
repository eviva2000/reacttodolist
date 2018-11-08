import React from "react";
import TodoListItem from "./TodoListItem";
import ItemForm from "./ItemForm";
import Swiper from "react-id-swiper";
export default class TodoList extends React.Component {
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
  itemAddedCallback = info => {
    console.log(info);
    this.setState({
      items: this.state.items.concat(info)
    });
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

    const items = this.state.items.map(item => {
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
    return (
      <div>
        <ItemForm itemAddedCallback={this.itemAddedCallback} />
        <Swiper>
          <div className="slide">slide number 1</div>
          <div className="slide">slide number 2</div>
          <div className="slide">slide number 3</div>
          <div className="slide">slide number 4</div>
        </Swiper>
        <ul>{items}</ul>
      </div>
    );
  }
}
