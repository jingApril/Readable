import {
  GET_A_POST,
  UPVOTE_A_POST,
  DOWNVOTE_A_POST
} from "../actions/actionTypes";

const post = (state = {}, action) => {
  switch (action.type) {
    case "GET_A_POST":
      return { ...action.payload };

    case "UPVOTE_A_POST":
    case "DOWNVOTE_A_POST":
      return action.post;

    default:
      return state;
  }
};

export default post;
