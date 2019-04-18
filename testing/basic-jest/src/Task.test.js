import React from 'react';
import ReactDOM from 'react-dom';
import Task from './Task';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme' ;

const props = { task : { id: 1, name: "test" }, onUpdate: jest.fn(), onRemove: jest.fn() };

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

describe('Task Component', () => {
  let taskComponent;
  beforeEach(() => {
    taskComponent = shallow(<Task {...props} />);
  });

  it('has the data', () => {
    expect(taskComponent.find(".Task-data").exists()).toBe(true);
    expect(taskComponent.find(".Task-data").text()).toBe(`${props.task.id} - ${props.task.name}`);
  });

  it('has the update link', () => {
    expect(taskComponent.find("a").at(0).exists()).toBe(true);
    expect(taskComponent.find("a").at(0).text()).toBe(`Update`);
  });

  it('has the deletion link', () => {
    expect(taskComponent.find("a").at(1).exists()).toBe(true);
    expect(taskComponent.find("a").at(1).text()).toBe(`Delete`);
  });

  it('does not have form by default', () => {
    expect(taskComponent.find("Form").exists()).toBe(false);
  });
});

describe("Update", () => {
  let updateLink;
  let taskComponent;

  beforeEach(() => {
    taskComponent = shallow(<Task {...props} />);
    updateLink = taskComponent.find("a").at(0);
  });

  it('shows up the Form when clicked', () => {
    updateLink.simulate("click");
    expect(taskComponent.find("Form").exists()).toBe(true);
  });

  it('passes task data to the Form', () => {
    updateLink.simulate("click");
    const form = taskComponent.find("Form");

    expect(form.props().task).toBe(props.task);
  });

  it('passes update function to the Form', () => {
    updateLink.simulate("click");
    const form = taskComponent.find("Form");

    form.simulate("update", {name: "updated Task" });
    expect(props.onUpdate).toHaveBeenCalledWith({"id": 1, "name": "updated Task"});
  });

  it('update method calls update from props', () => {
    updateLink.simulate("click");
    taskComponent.instance().update({name: "updated Task" });

    expect(props.onUpdate).toHaveBeenCalledWith({"id": 1, "name": "updated Task"});
  });
});

describe("Update", () => {
  let deleteLink;
  let taskComponent;

  beforeEach(() => {
    taskComponent = shallow(<Task {...props} />);
    deleteLink = taskComponent.find("a").at(1);
  });

  it('calls onUpdate callback when clicked', () => {
    deleteLink.simulate("click");
    expect(props.onRemove).toHaveBeenCalledWith(1);
  });
});