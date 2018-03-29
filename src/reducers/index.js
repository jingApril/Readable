import { combineReducers } from 'redux'
import {FETCH_POSTS,FETCH_POSTS_SUCCESS,FETCH_POSTS_FAILURE} from '../actions'

// const initialPostState = { postsList:[], error:null, loading:false }

function postsList (state = { }, action) {
    switch (action.type) {

       case FETCH_POSTS:
	   return ({
			...state,
			[action.data.id]: action.data
		});

       case FETCH_POSTS_SUCCESS:
 	   return ({
 			...state,
 			postsList: {posts: action.result, error:null, loading: false}
 		});

      case FETCH_POSTS_FAILURE:
  	   return ({
  			...state,
  			postsList: {posts: action.result, error:null, loading: false}
  		});
       default:
           return state
   }
}

export default combineReducers({postsList})
