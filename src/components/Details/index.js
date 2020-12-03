import React from 'react';
import './style.css';

const Details = ({ showDetails, hideDetails, title, description, timesTemp, showForm, todo, todos, setTodos }) => {
  
  const showFormHandler = (e) => {
    e.preventDefault();
    setTodos(todos.filter((el) => el.id !== todo.id));
    showForm(e);
  };
  
  return (
    <div className={showDetails ? "details display-block" : "details display-none"}>
      <div className="details-content">
        <h2 className="title-details">{title}</h2>
        <p className="time">
          {timesTemp.day}/
          {timesTemp.mes}/
          {timesTemp.year} | {timesTemp.hr}:
          {timesTemp.min}:
          {timesTemp.sec}
        </p>
        <p className="desc-details">{description}</p>
        <button
          onClick={showFormHandler}
          className="edit-details"
        >Editar</button>
        <button
          onClick={hideDetails}
          className="hide-details"
        >X</button>
      </div>
    </div>
  );
};

export default Details;