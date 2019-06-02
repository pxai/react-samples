import { normalize } from 'normalizr';
import { project } from "./schemas";

const mockProject = {
	id: 42,
	members: [
		{
			id: 333,
			days: 356,
			employee: {
				id: 1,
				name: "Richard",
				department: {id: 1, name: "Programming"}
			}
		},
		{
			id: 666,
			days: 350,
			employee: {
				id: 15,
				name: "Gilfoyle",
				department: {id: 2, name: "Systems Engineering"}
			}
		}
	]
};


describe ("Project reducer", () => {
	it ("Shoud normalize", () => {
		const normalizedData = normalize (mockProject, project);
		console.log ("my object: %o", normalizedData)
	});
});
