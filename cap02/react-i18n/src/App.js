import React, { Component } from 'react';
import { I18n, Trans } from 'react-i18next';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    
    return (
      <I18n ns="translations">
      {
      (t, { i18n }) => (
   
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{t('title')}</h1>
          </header>
          <p className="App-intro">
          {t('App.subtitle')}
          <div>
          <Trans i18nKey="App.title" >Default title</Trans>
            <div>
              <button onClick={() => i18n.changeLanguage('es')}>ES</button>
              <button onClick={() => i18n.changeLanguage('en')}>EN</button>
            </div>
          </div>
          </p>
        </div>
      )}
      </I18n>
    );
  }
}

export default App;
