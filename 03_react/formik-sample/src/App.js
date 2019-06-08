import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleForm from './SimpleForm';
import ValidationForm from './ValidationForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleForm />
        <ValidationForm />
      </header>
    </div>
  );
}

export default App;
