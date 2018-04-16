import { CHANGE_SORT } from '../actions/actionTypes';

const sort = (state = { sort: 'latest' }, action) => {
  switch(action.type) {
    case 'CHANGE_SORT':
      const newValue = action.value
      return {
        ...state,
        sort: newValue
      }
    default:
      return state
  }
}
export default sort
