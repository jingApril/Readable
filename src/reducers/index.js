import {combineReducers} from 'redux'
import categories from './categories'
import posts from './posts'
import post from './post'
import comment from './comment'

const rootReducer = combineReducers({categories,posts,post,comment})

export default rootReducer
