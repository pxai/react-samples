import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About  from './components/About';
import NotFound  from './components/NotFound';
import NewsDetail  from './components/NewsDetail';
import NewsList  from './NewsList';
import './App.css';



class App extends Component {

  render() {

    return (
      <div className="app">
        <div className="list-books">
            <div className="list-books-title">
              <h1>React News</h1>
            </div>
            <div>
              <Link to="/">Home</Link> |
              <Link to="/about">About</Link> |
            </div>
            <Switch>
              <Route exact path='/' component={NewsList}/>
              <Route exact path='/404' component={NotFound}/>
              <Route path='/news/:category/:id' component={NewsDetail} />
              <Route exact path='/newsList' component={NewsList} />
              <Route exact path='/deleted' component={NewsList}/>
              <Route exact path='/about' component={About} />
              <Route path='/:category' component={NewsList} />
              <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
