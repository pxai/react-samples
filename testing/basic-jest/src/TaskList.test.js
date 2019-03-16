import React from 'react';
import ReactDOM from 'react-dom';
import TaskList from './TaskList';
import renderer from 'react-test-renderer';
import Api from "./Api";

const task = { id: 2, task: "Do it"};
const api = new Api([task]);

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskList api={api} />, div);
  ReactDOM.unmountComponentAtNode(div);
});


test('it matches snapshot', () => {
 const component = renderer.create(<TaskList api={api} />);
 let tree = component.toJSON();
 expect(tree).toMatchSnapshot();
});

