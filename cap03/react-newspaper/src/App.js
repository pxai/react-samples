import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About  from './components/About';
import NotFound  from './components/NotFound';
import ArticleDetail  from './components/ArticleDetail';
import ArticleList  from './ArticleList';
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
              <Route exact path='/' component={ArticleList}/>
              <Route exact path='/404' component={NotFound}/>
              <Route path='/article/:category/:id' component={ArticleDetail} />
              <Route exact path='/articleList' component={ArticleList} />
              <Route exact path='/deleted' component={ArticleList}/>
              <Route exact path='/about' component={About} />
              <Route path='/:category' component={ArticleList} />
              <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
