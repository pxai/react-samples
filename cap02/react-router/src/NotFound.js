import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';



class NotFound extends Component {

  render() {
    const from = '';//this.props.history.location.state.from || '';
      console.log(this.props.history.location.state);
      // {this.props.history.location.state.from.pathname}
    return (
      <div className="app">
        <div className="app-header">
            <div className="lapp-header-title">
              <h1>NotFound component</h1>
            </div>
            <div>
                That page was not found when trying:

                <Link to="/">Back</Link>
            </div>
        </div>
      </div>
    );
  }
}
export default NotFound;