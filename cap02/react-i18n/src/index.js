import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import { I18n, I18nextProvider,  Trans } from 'react-i18next';
import { reactI18nextModule } from 'react-i18next';



i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(reactI18nextModule)
  .init({
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',

    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true
    }
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
