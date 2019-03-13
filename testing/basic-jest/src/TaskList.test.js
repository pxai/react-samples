import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import renderer from 'react-test-renderer';

const task = { id: 2, task: "Do it"};

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskList {...task } />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('it matches snapshot', () => {
 const component = renderer.create(<TaskList {...task} />);
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();
});

