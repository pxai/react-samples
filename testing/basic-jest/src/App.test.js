import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme' ;
import renderer from 'react-test-renderer';
 // https://medium.com/codeclan/testing-react-with-jest-and-enzyme-20505fec4675

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('matches snapshot', () => {
	const component = renderer.create(<App />);
 let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Component', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  it('has the title', () => {
    expect(app.find(".App-title").exists()).toBe(true);
    expect(app.find(".App-title").text()).toBe('Task List');
  });
  
  it('has a Greet component', () => {
    expect(app.find('Greet').exists()).toBe(true);
  });

  it('has a TaskList component', () => {
    expect(app.find('TaskList').exists()).toBe(true);
  });
})


