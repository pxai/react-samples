import reducer from './reducers/projects';
import actions from './actions/projects';

const mockProject = {
	id: 42,
	members: [
		{
			id: 666,
			days: 356,
			employee: {
				id: 15,
				name: 'Dilbert',
				department: 'Engineering'
			}		
		},
		{
			id: 666,
			days: 356,
			employee: {
				id: 15,
				name: 'Dilbert',
				department: 'Engineering'
			}
		}
	]	
	
};


describe('Project reducer', () => {
	it('Shoud deserialize', () => {
	});
});
