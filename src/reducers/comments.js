import {
  GET_COMMENTS,
  UPVOTE_A_COMMENT,
  DOWNVOTE_A_COMMENT,
  ADD_A_COMMENT,
  EDIT_A_COMMENT,
  DELETE_A_COMMENT
} from "../actions/actionTypes";

export default function comments(state = {}, action) {
  switch (action.type) {
    case "GET_COMMENTS":
      return action.comments;

    case "UPVOTE_A_COMMENT":
    case "DOWNVOTE_A_COMMENT":
      return state.map(
        comment =>
          comment.id === action.comment.id
            ? (comment = action.comment)
            : comment
      );

    case "ADD_A_COMMENT":
      return state.concat(action.newcomment);

    case "EDIT_A_COMMENT":
      return state.map(comment => {
        if (comment.id === action.comment.id) {
          comment.body = action.comment.body;
        }
        return comment;
      });

    case "DELETE_A_COMMENT":
      return state.filter(comment => comment.id !== action.comment.id);

    default:
      return state;
  }
}
