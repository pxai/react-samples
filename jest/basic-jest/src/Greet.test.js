import React from 'react';
import ReactDOM from 'react-dom';
import Greet from './Greet';
import renderer from 'react-test-renderer';

test('renders Greet without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Greet />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('it matches snapshot', () => {
	const component = renderer.create(<Greet />);
 let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('it changes state', () => {
	const component = renderer.create(<Greet />);
 let tree = component.toJSON();
 tree.props.onClick();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
