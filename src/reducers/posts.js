import {
	GET_POSTS,
	GET_POSTS_BYCAT,
	UPVOTE_A_POST,
	DOWNVOTE_A_POST,
	DELETE_A_POST,
	ADD_POST,
	EDIT_A_POST
} from '../actions'

export default function posts(state =[], action) {
	switch (action.type) {
		case 'GET_POSTS':
			return action.posts

		case 'GET_POSTS_BYCAT':
			return {
				...state,
				posts: action.posts
			}

		case 'UPVOTE_A_POST':
		case 'DOWNVOTE_A_POST':
			return state.map(
				post => (post.id === action.post.id)
				? post = action.post
				: post);

		case 'ADD_POST':
			 return state;
			 //return state.map( posts.push(action.post));

			 // return {
			 //  ...state,
			 //   post: action.post
			 //  }

		case 'DELETE_A_POST':
			return state.filter(post => post.id !== action.id);

		default:
			return state;
	}
}
