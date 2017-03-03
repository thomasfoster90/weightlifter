import React, { Component } from 'react';
import {Link, IndexLink, hashHistory} from 'react-router'

import logo from './logo.svg';
import './App.css';


class App extends Component {
  _logoutLink(){
  return <a href="#" onClick={(e) => {
    e.preventDefault();
    this.props.route.auth.logout();
    hashHistory.push('/')
  }}>Logout</a>
}
_loginLink(){
  return <a href="#" onClick={(e) => {
    e.preventDefault();
    this.props.route.auth.login();
  }}>Login</a>
}
  render() {
    const auth = this.props.route.auth;
    const sessionLink = auth.loggedIn()? this._logoutLink(): this._loginLink();

    let children = null;
  if(this.props.children){
    children=React.cloneElement(this.props.children, {
      auth:this.props.route.auth
    })
  }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Weight Lifter</h2>
        </div>
        <IndexLink to="/" className="button">Home</IndexLink>
          <br />
          {' '}
          <br />
          <Link to="/arms" className="button">Arms</Link>
          {' '}
          <Link to="/legs" className="button">Legs</Link>
          {' '}
          <Link to="/chest" className="button">Chest</Link>
          {' '}
          <Link to="/core" className="button">Core</Link>
          <br />
          {' '}
          <br />
          {sessionLink}
          {children}
      </div>
    );
  }
}

export default App;
