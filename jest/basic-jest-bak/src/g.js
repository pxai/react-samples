import React from 'react';
import ReactDOM from 'react-dom';
import Greet from './Greet';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Greet />, div);
  ReactDOM.unmountComponentAtNode(div);
});

