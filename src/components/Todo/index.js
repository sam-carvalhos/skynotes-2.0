import React from 'react';

import Details from '../Details/index.js';

import './style.css';

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  
  openDetailsHandler = (ev) => {
    ev.preventDefault();
    const e = {
      time: this.props.timesTemp,
      title: this.props.title,
      description: this.props.description
    };
    this.props.getTimesTemp(e);
    this.props.getTodo(this.props.todo);
    this.props.openDetails();
  }
    
  deleteHandler = (e) => {
    e.preventDefault();
    this.props.setTodos(this.props.todos.filter((el) => el.id !== this.props.todo.id));
  };
  
  completeHandler = (e) => {
    e.preventDefault();
    this.props.setTodos(this.props.todos.map((item) => {
      if(item.id === this.props.todo.id) {
        return {
          ...item, completed: !item.completed
        };
      }
      return item;
    }));
  };
  
  render () {
    return (
      <div className={`todo ${this.props.todo.completed ? "completed" : ""}`}>
        <button
          className="todo-content"
          onClick={this.openDetailsHandler}>
          <div className="title-desc">
            <h2>{this.props.title}</h2>
            <p>{this.props.description}</p>
          </div>
          <p className="see-more">Ver detalhes</p>
        </button>
        <div className="buttons-trash-check">
          <button
            onClick={this.deleteHandler}
            className="trash-btn">
            <i class="fas fa-trash"></i>
          </button>
          <button
            onClick={this.completeHandler}
            className="check-btn">
            <i class="fas fa-check"></i>
          </button>
        </div>
      </div>
    );
  }
};
export default Todo;