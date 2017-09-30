import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './Page'

class App extends Component {
  render() {
    return (
      <Page>
        <Page.Header logo={logo} />
        <Page.Paragraph />
      </Page>
    );
  }
}

export default App;
