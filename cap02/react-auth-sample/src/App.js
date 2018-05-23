import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NotFound from './NotFound';
import Default from './Default';
import Login from './Login';
import ProtectedPage from './ProtectedPage';
import AdminPage from './AdminPage'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Auth Sample</h1>
        </header>
			<div>
              <Link to="/">Home</Link> | 
              <Link to="/login">Login</Link> | 
              <Link to="/protected">Protected</Link> | 
              <Link to="/admin">Admin</Link> | 
            </div>
            <Switch>
              <Route exact path='/' component={Default}/>  
              <Route exact path='/404' component={NotFound}/> 
              <Route exact path='/login' component={Login} />
              <Route exact path='/protected' component={ProtectedPage} />
              <Route exact path='/admin' component={AdminPage} />
              <Route component={NotFound} />
          </Switch>

      </div>
    );
  }
}

export default App;
