import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Default  from './Default';
import NotFound  from './NotFound';
import About  from './About';
import NotFound  from './NotFound';
import MComponent  from './component/MComponent';
import AppBar  from './component/AppBar';
import Avatar  from './component/Avatar';
import Badge  from './component/Badge';
import BottomNavigation  from './component/BottomNavigation';
import Button  from './component/Button';
import Card  from './component/Card';
import Chip  from './component/Chip';
import DatePicker  from './component/DatePicker';
import Dialog  from './component/Dialog';
import Divider  from './component/Divider';


import './App.css';

class App extends Component {

  render() {

    return (
      <div className="app">
        <div className="app-header">
            <div className="lapp-header-title">
              <h1>Routing sample</h1>
            </div>
            <div>
              <Link to="/">Home</Link> | 
              <Link to="/about">About</Link> | 
            </div>
            <Switch>
              <Route exact path='/' component={Default}/>  
              <Route exact path='/about' component={About} />
              <Route exact path='/component/component' component={MComponent} />
              <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;