import React from 'react';
import ReactDOM from 'react-dom';
import Form from './Form';
import renderer from 'react-test-renderer';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('it matches snapshot', () => {
	const component = renderer.create(<Form />);
 let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

