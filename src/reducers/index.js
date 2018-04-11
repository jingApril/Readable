import {combineReducers} from 'redux'
import categories from './categories'
import posts from './posts'
import post from './post'
import comments from './comments'

const rootReducer = combineReducers({categories,posts,post,comments})

export default rootReducer
