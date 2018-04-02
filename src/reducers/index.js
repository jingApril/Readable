import { combineReducers } from 'redux'
import categories from './categories'
import allposts from './allposts'
import postsByCat from './postsByCat'

const rootReducer = combineReducers({ categories,allposts,postsByCat})

export default rootReducer



// import { combineReducers } from 'redux'
// import {RECEIVE_CATEGORIES} from '../actions'

// const initialPostState = { postsList:[], error:null, loading:false }

// const initialState = {
//  categories : {}
// }
//
// export default function categories( state = initialState, action ) {
//   const { categories } = action
//
//   switch (action.type) {
//       case RECEIVE_CATEGORIES :
//         return {
//           ...state,
//          categories
//         }
//       default :
//         return state
//   }
// }

// function postsList (state = { }, action) {
//     switch (action.type) {
//
//        case FETCH_POSTS:
// 	   return ({
// 			...state,
// 			[action.data.id]: action.data
// 		});
//
//        case FETCH_POSTS_SUCCESS:
//  	   return ({
//  			...state,
//  			postsList: {posts: action.result, error:null, loading: false}
//  		});
//
//       case FETCH_POSTS_FAILURE:
//   	   return ({
//   			...state,
//   			postsList: {posts: action.result, error:null, loading: false}
//   		});
//        default:
//            return state
//    }
// }
//
// export default combineReducers({postsList})
