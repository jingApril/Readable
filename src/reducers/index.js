import { combineReducers } from "redux";
import categories from "./categories";
import posts from "./posts";
import post from "./post";
import comments from "./comments";
import sort from "./sort";

const rootReducer = combineReducers({
  categories,
  posts,
  post,
  comments,
  sort
});

export default rootReducer;
