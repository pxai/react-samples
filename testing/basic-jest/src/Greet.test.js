import React from 'react';
import ReactDOM from 'react-dom';
import Greet from './Greet';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme' ;

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

describe('Greet Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Greet />);
  });

  it('has a greet div', () => {
    expect(component.find("div.Greet").exists()).toBe(true);
    expect(component.find("div.Greet").text()).toBe("This is a greet");
  });
});

describe('Click on Component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Greet />);
  });

  it('changes message on click', () => {
    expect(component.find("div.Greet").text()).toBe("This is a greet");

    component.find("div.Greet").simulate("click");

    expect(component.find("div.Greet").text()).toBe("I was clicked");
  });
});