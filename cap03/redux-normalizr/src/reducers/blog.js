import {
	GET_POSTS,
	GET_POST,
	ADD_POST,
	UPDATE_POST,
	DELETE_POST,
	ADD_COMMENT,
	DELETE_COMMENT,
	UPDATE_COMMENT
} from '../actions/blog.js';

const initialPostState = {
	posts: [
			{ 
				id: 42,
				title: 'This is a post',
				content: 'This post sucks big time',
				comments: [
							{ id: 666, content: 'This comment sux'},
							{ id: 665, content: 'This comment rulz'}
							]
			}
		]
};


export default function post (state = initialPostState, action) {

	switch(action.type) {
		case GET_POSTS:
					return { posts: state.posts }
		case GET_POST:
					return { posts: state.posts }
		case ADD_POST:
					return { posts: state.posts }
		case UPDATE_POST:
					return { posts: state.posts }
		case DELETE_POST:
					return { posts: state.posts }
		case ADD_COMMENT:
					return { posts: state.posts }
		case UPDATE_COMMENT:
					return { posts: state.posts }
		case DELETE_COMMENT:
					return { posts: state.posts }
		default:
					return state;
	}

}
