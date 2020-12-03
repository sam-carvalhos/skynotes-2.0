import React from 'react';
import Todo from '../Todo/index.js';
import './style.css';

export default class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      message: false
    };
  }
  
  saveInputs = () => {
    const name = this.props.name;
    this.setState({name: name});
    
    if(!this.state.name) {
      this.setState({ message: true });
    } else {
        this.props.hide(this.state.name);
    }
  };

  render() {
    return (
      <div className={this.props.show ? "landing display-block" : "landing display-none"}>
        <section className="landing-main">
          <h2 className="title-landing">Seja Bem-vindo</h2>
          <p>Para começar preencha o campo abaixo:</p>
          {this.state.message ? <span className="alert-message">Preencha todos os campos!</span> : <span></span>}
          <input
            type="text"
            className="input-name"
            placeholder="Primeiro nome"
            value={this.state.name}
            onChange={event => this.setState({name: event.target.value})}
          />
          <button
            className="landing-btn"
            onClick={this.saveInputs}
            type="submit">
            Entrar
          </button>
        </section>
      </div>
    );
  }
};
