import React from 'react';
import './style.css';

const Form = ({ showForm, hideForm, setInputTitle, setInputDesc, todos, setTodos, title, description, message, setMessage, hideDetails }) => {
  const inputTitleHandler = (e) => {
    const titleValue = e.target.value;
    setInputTitle(titleValue);
  };
  
  const inputDescHandler = (e) => {
    const descValue = e.target.value;
    setInputDesc(descValue);
  };
  
  const submitTodoHandler = (e) => {
    e.preventDefault();
    
    var day = new Date().getDate();
    var mes = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hr = new Date().getHours();
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds();

    var times = {
     day,
     mes,
     year,
     hr,
     min,
     sec
    };
    
    if(!title || !description) {
      setMessage(true);
      return;
    }
    
    setTodos([...todos,{
      title: title,
      description: description,
      timesTemp: times,
      completed: false,
      id: Math.random() * 1000
    }]);
    setInputTitle('');
    setInputDesc('');
    setMessage(false);
    hideForm(e);
    hideDetails(e);
  };
  
  return (
    <form className={showForm ? "form display-block" : "form display-none"}>
      <div className="form-container">
        <h3>Add a New Notes</h3>
        {message ? <p className="alert-message">Preencha todos os campos!</p> : ""}
        <input
          value={title}
          type="text"
          className="todo-input"
          placeholder="Choose one title..."
          onChange={inputTitleHandler}/>
        <textarea
          value={description}
          type="text"
          className="todo-desc"
          placeholder="Write your description..."
          onChange={inputDescHandler}/>
        <button
          onClick={submitTodoHandler}
          type="submit"
          className="todo-button">
          Salvar
        </button>
        <button
          onClick={hideForm}
          className="hide-button">
          X
        </button>
      </div>
    </form>
  );
};

export default Form;