import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

class ProtectedPage extends Component {
  render() {
    return (
      <div >
			<header>Protected Page</header>
      </div>
    );
  }
}

export default ProtectedPage;
