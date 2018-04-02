import { RECEIVE_CATEGORIES } from '../actions'

export default function categories( categories = [], action ) {
  switch (action.type) {
  case 'RECEIVE_CATEGORIES' :
    return action.categories
  default :
    return categories
  }
}
