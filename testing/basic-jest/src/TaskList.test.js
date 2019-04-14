import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme' ;
import renderer from 'react-test-renderer';
import TaskList from './TaskList';
import Api from "./Api";

const tasks = [{ id: 2, task: "Do it"}, {id: 4, task: "Don't"}];

const mockFindAll = jest.fn(() => tasks);
jest.mock('./Api', () => {
  return jest.fn().mockImplementation(() => {
    return {findAll: mockFindAll};
  });
});

let api = new Api();

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

describe('Component', () => {
  let taskList;
  beforeEach(() => {
    taskList = shallow(<TaskList api={api} />);
  });

  it('has the title', () => {
    expect(taskList.find("h3").exists()).toBe(true);
    expect(taskList.find("h3").text()).toBe('Tasks: ' + tasks.length);
  });

  it('has Task components', () => {
    expect(taskList.find('Task').length).toBe(tasks.length);
  });

  it('has link to add more tasks', () => {
    expect(taskList.find('a').exists()).toBe(true);
    expect(taskList.find('a').text()).toBe('Add Task');
  });
});

describe('Form toggle', () => {
  let taskList;
  let link;

  beforeEach(() => {
    taskList = shallow(<TaskList api={api} />);
    link = taskList.find('a');
  });

  it('does not show form by default', () => {
    expect(taskList.find("Form").exists()).toBe(false);
  });

  it('shows form when clicked', () => {
    link.simulate("click");
    expect(taskList.find("Form").exists()).toBe(true);
  });

  it('hides form when clicked again', () => {
    link.simulate("click");
    link.simulate("click");
    expect(taskList.find("Form").exists()).toBe(false);
  });
});

describe('Api requests', () => {
  let taskList;

  beforeEach(() => {
    Api.mockClear();
    mockFindAll.mockClear();
  });

  test('calls find all', () => {
    taskList = shallow(<TaskList api={api} />);
    expect(mockFindAll).toHaveBeenCalledTimes(1);
  });
});