import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Task />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('it matches snapshot', () => {
	const component = renderer.create(<Task />);
 let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

