import { combineReducers } from "redux";
import { ADD_POST, DELETE_POST } from "../actions";


const initialCalendarState = {
	sunday: {
		breakfast: null,
		lunch: null,
		dinner: null
	},
	monday: {
		breakfast: null,
		lunch: null,
		dinner: null
	},
	tuesday: {
		breakfast: null,
		lunch: null,
		dinner: null
	},
	wednesday: {
		breakfast: null,
		lunch: null,
		dinner: null
	},
	thursday: {
		breakfast: null,
		lunch: null,
		dinner: null
	},
	friday: {
		breakfast: null,
		lunch: null,
		dinner: null
	},
	saturday: {
		breakfast: null,
		lunch: null,
		dinner: null
	}
}

function post (state = initialPostState, action) {

   switch (action.type) {
       case LOAD_SINGLE_POST_SUCCESS:
	   return ({
			...state,
			[action.data.id]: action.data
		});
       case ADD_NEW_POST_SUCCESS:
	   return ({
			...state,
			[action.data.id]: action.data
		});
       case EDIT_POST_SUCCESS:
		   return ({
			    ...state,
			    [action.data.id]: action.data
			});
       case DELETE_POST_SUCCESS:
           debugger;
		   return {
			  ...state,
			  [action.data.id]:  null
		  }
       case VOTE_POST_SUCCESS:
	   return ({
			...state,
			[action.data.id]: action.data
		});
       default:
           return state
   }
}

export default combineReducers({post})
