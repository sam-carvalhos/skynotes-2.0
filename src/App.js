import React from 'react';

import Header from './components/Header/index.js';
import Form from './components/Form/index.js';
import TodoList from './components/TodoList/index.js';
import Details from './components/Details/index.js';
import Landing from './components/Landing/index.js';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      showDetails: false,
      showLanding: true,
      title: '',
      description: '',
      timesTemps: {},
      getTodo: {},
      message: false,
      det: false,
      name: JSON.parse(localStorage.getItem('name')) || '',
      logged: JSON.parse(localStorage.getItem('logged')) || false,
      todos: []
    };
  }
  
  componentDidMount() {
    this.getLocalTodos();
    
    const logged = this.state.logged;
    
    if(logged == false) {
      this.setState({showLanding: true});
    } else if(logged == true) {
      this.setState({showLanding: false});
    }
  }
  
  hideLanding = (name) => {
    this.setState({ showLanding: false });
    this.setState({ name: name });
    this.setState({ logged: true });
    localStorage.setItem('logged', JSON.stringify(true));
    localStorage.setItem('name', JSON.stringify(name));
  };
  
  signOut = () => {
    this.setState({ logged: false });
    localStorage.setItem('logged', JSON.stringify(false));
    window.location.reload(false);
  };
  
  showForm = (e) => {
    e.preventDefault();
    this.setState({ showForm: true });
    this.setDet(false);
  };
  
  hideForm = (e) => {
    e.preventDefault();
    this.setMessage(false);
    this.setState({ showForm: false });
  };
  
  showDetails = () => {
    this.setState({ showDetails: true });
  };
  
  hideDetails = (e) => {
    e.preventDefault();
    this.setState({ showDetails: false });
    this.setState({ title: '', description: ''});
  };
  
  setInputTitle = (titleValue) => {
    this.setState({title: titleValue});
  };
  
  setInputDesc = (descValue) => {
    this.setState({description: descValue});
  };
  
  setMessage = (message) => {
    this.setState({ message: message });
  };
  
  getTimesTemp = (e) => {
    this.setState({ timesTemps: e.time, title: e.title, description: e.description });
  };
  
  getTodo = (e) => {
    this.setState({ todo: e });
  };
  
  setTodos = (todos) => {
    this.setState({todos: todos});
    this.saveLocalTodos(todos);
  };
  
  setDet = (det) => {
    this.setState({ det: det });
  };
  
  saveLocalTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
  
  getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      this.setTodos(todoLocal);
    }
  };
  
  render() {
    return (
      <div className="App">
        <Landing
          show={this.state.showLanding}
          name={this.state.name}
          hide={this.hideLanding}
        />
        <Header
          name={this.state.name}
          signOut={this.signOut}
        />
        <Form
          showForm={this.state.showForm}
          hideForm={this.hideForm}
          setInputTitle={this.setInputTitle}
          setInputDesc={this.setInputDesc}
          todos={this.state.todos}
          setTodos={this.setTodos}
          title={this.state.title}
          description={this.state.description}
          message={this.state.message}
          setMessage={this.setMessage}
          hideDetails={this.hideDetails}
          det={this.state.det}
        />
        <button
          className="plus-button"
          onClick={this.showForm}>+
        </button>
        
        { this.state.todos.length === 0 ? <p className="not-todos-provide">Adicione uma nova nota</p> : null }
        <TodoList
          todos={this.state.todos}
          setTodos={this.setTodos}
          openDetails={this.showDetails}
          getTimesTemp={this.getTimesTemp}
          getTodo={this.getTodo}
        />
        <Details
          showDetails={this.state.showDetails}
          hideDetails={this.hideDetails}
          title={this.state.title}
          description={this.state.description}
          todos={this.state.todos}
          timesTemp={this.state.timesTemps}
          showForm={this.showForm}
          todo={this.state.todo}
          setTodos={this.setTodos}
          setDet={this.setDet}
        />
      </div>
    );
  }
}

export default App;
