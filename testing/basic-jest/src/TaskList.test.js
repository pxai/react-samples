import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskList />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('it matches snapshot', () => {
	const component = renderer.create(<TaskList />);
 let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

