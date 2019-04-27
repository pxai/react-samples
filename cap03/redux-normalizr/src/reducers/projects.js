import { normalizr } from "normalizr";
import { projectSchema } from "../schemas";
import Immutable from "seamless-immutable";

const defaultState = Immutable({
	project: [],
	member: [],
	employee: []	
});

export default function projectReducer(state = defaultState, action) {
	switch (action.type) {
		case "DESERIALIZE_PROJECT":
			let normalizedProject = normalize(action, {
				project: projectSchema
			});
			return state.merge(normalizedProject.entities);
		default:
			return state;

	}	
}
