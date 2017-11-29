import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Default  from './Default';
import NotFound  from './NotFound';
import Sample  from './Sample';
import About  from './About';
import Category  from './Category';
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
              <Route exact path='/404' component={NotFound}/> 
              <Route path='/sample/:id/:name' component={Sample} />
              <Route exact path='/about' component={About} />
              <Route path='/category/:category' component={Category} />
              <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;