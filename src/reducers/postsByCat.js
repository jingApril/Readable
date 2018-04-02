import { combineReducers } from 'redux'
import { GET_CATEGORY_POSTS} from '../actions'

export default function postsByCat(state = [], action) {
    switch (action.type) {
        case 'GET_CATEGORY_POSTS':
            return action.postsByCat;

        default:
            return state;
    }
}
