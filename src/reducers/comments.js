import {
  GET_COMMENTS,
  UPVOTE_A_COMMENT,
  DOWNVOTE_A_COMMENT,
  ADD_A_COMMENT,
  EDIT_A_COMMENT,
  DELETE_A_COMMENT
} from '../actions'

export default function comments (state = {}, action) {

  switch (action.type) {

    case 'GET_COMMENTS':
      return action.comments

    case 'UPVOTE_A_COMMENT':
    case 'DOWNVOTE_A_COMMENT':
      return state.map(
         comment => (comment.id === action.comment.id)
         ? comment = action.comment
         : comment);

    case 'ADD_A_COMMENT':
      return state.concat(action.newcomment);

    case 'EDIT_A_COMMENT':
      let commentToEdit = action.id;
      return (state.filter(comment => comment.id !== commentToEdit)).concat(action.comment);

    case 'DELETE_A_COMMENT':
      let commentToDel = action.comment.id;
      return state.filter(comment => comment.id !== commentToDel);

    default:
      return state;
  }

}
