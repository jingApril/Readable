import { GET_POSTS } from '../actions'

export default function allposts( allposts = [], action ) {
  switch (action.type) {
  case 'GET_POSTS' :
    return action.allposts
  default :
    return allposts
  }
}
