import React from 'react';

import Todo from '../Todo/index.js';

import './style.css';

const TodoList = ({ todos, setTodos, setTimes, openDetails, getTimesTemp, getTodo }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
      {
        todos.map(todo => (
          <Todo
            key={todo.id}
            title={todo.title}
            description={todo.description}
            timesTemp={todo.timesTemp}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            openDetails={openDetails}
            getTimesTemp={getTimesTemp}
            getTodo={getTodo}
          />
        ))
      }
      </ul>
    </div>
  );
};

export default TodoList;