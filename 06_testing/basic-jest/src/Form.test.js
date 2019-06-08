import React from "react";
import ReactDOM from "react-dom";
import Form from "./Form";
import renderer from "react-test-renderer";
import { shallow } from "enzyme" ;

let task = {id: 2, name: "Do shopping"};

test ("renders without crashing", () => {
	const div = document.createElement ("div");
	ReactDOM.render (<Form/>, div);
	ReactDOM.unmountComponentAtNode (div);
});


test ("it matches snapshot", () => {
	const component = renderer.create (<Form/>);
	let tree = component.toJSON ();
	expect (tree).toMatchSnapshot ();
});

describe ("Form Component", () => {
	let component;
	let props;

	beforeEach (() => {
		props = {
			task,
			onUpdate: jest.fn ()
		};
		component = shallow (<Form {...props} />);
	});

	it ("has a label", () => {
		expect (component.find ("label").exists ()).toBe (true);
		expect (component.find ("label").text ()).toBe ("Task");
	});

	it ("has an input", () => {
		expect (component.find ("[type='text']").exists ()).toBe (true);
		expect (component.find ("[type='text']").props ().value).toBe (task.name);
	});

	it ("has a button", () => {
		expect (component.find ("input[type='button']").exists ()).toBe (true);
	});
});

describe ("Name input Component", () => {
	let component;
	let props;

	beforeEach (() => {
		props = {
			task,
			onUpdate: jest.fn ()
		};
		component = shallow (<Form {...props} />);
	});

	it ("it changes as you write", () => {
		expect (component.find ("[type='text']").props ().value).toBe (task.name);

		component.find ("[type='text']").simulate ("change", {target: {value: "Hello"}});

		expect (component.find ("[type='text']").props ().value).toBe ("Hello");
	});
});

describe ("Sends form", () => {
	let component;
	let props;

	beforeEach (() => {
		props = {
			task,
			onUpdate: jest.fn ()
		};
		component = shallow (<Form {...props} />);
	});

	it ("sends form", () => {
		component.find ("[type='text']").simulate ("change", {target: {value: "Hello"}});

		component.find ("input[type='button']").simulate ("click");

		expect (props.onUpdate).toHaveBeenCalledWith ({"name": "Hello"});
	});

	it ("does not send form if empy", () => {
		component.find ("[type='text']").simulate ("change", {target: {value: ""}});

		component.find ("input[type='button']").simulate ("click");

		expect (props.onUpdate).toHaveBeenCalledTimes (0);
	});

	it ("empties form", () => {
		expect (component.find ("[type='text']").props ().value).toBe (task.name);

		component.find ("input[type='button']").simulate ("click");

		expect (component.find ("[type='text']").props ().value).toBe ("");
	});
});