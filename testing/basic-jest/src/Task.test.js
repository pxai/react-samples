import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';
import renderer from 'react-test-renderer';

const props = { task : { id: 1, name: "test" } };

test('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Task task={props.task} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('it matches snapshot', () => {
	const component = renderer.create(<Task task={props.task} />);
 let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

