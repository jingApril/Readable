import * as API from "../util/api";

import {
  GET_CATEGORIES,
  GET_POSTS,
  GET_POSTS_BYCAT,
  UPVOTE_A_POST,
  DOWNVOTE_A_POST,
  EDIT_A_POST,
  DELETE_A_POST,
  GET_COMMENTS,
  UPVOTE_A_COMMENT,
  DOWNVOTE_A_COMMENT,
  ADD_A_COMMENT,
  EDIT_A_COMMENT,
  DELETE_A_COMMENT,
  ADD_POST,
  GET_A_POST,
  CHANGE_SORT
} from "./actionTypes";

// categories
export const receiveCategories = categories => ({
  type: GET_CATEGORIES,
  categories
});
export const getAllCategories = () => dispatch =>
  API.fetchAllCategories().then(categories =>
    dispatch(receiveCategories(categories))
  );

export const receivePosts = posts => ({
  type: GET_POSTS,
  payload: posts
});

export const getPosts = () => dispatch =>
  API.fetchPosts().then(posts => dispatch(receivePosts(posts)));

export const getPostsbyCategory = category => dispatch =>
  API.fetchPostsByCategory(category).then(posts => {
    dispatch({
      type: GET_POSTS_BYCAT,
      payload: posts
    });
  });

// post

export const getOnePost = id => dispatch =>
  API.fetchOnePost(id).then(post => {
    dispatch({ type: GET_A_POST, payload: post });
  });

export const editPost = (id, post) => dispatch =>
  API.editPost(id, post).then(post => {
    dispatch({ type: EDIT_A_POST, payload: post });
  });

export const upVotePost = id => dispatch =>
  API.votePost(id, "upVote").then(post =>
    dispatch({ type: UPVOTE_A_POST, post })
  );

export const downVotePost = id => dispatch =>
  API.votePost(id, "downVote").then(post =>
    dispatch({ type: DOWNVOTE_A_POST, post })
  );

export const addPost = post => dispatch =>
  API.newPost(post).then(post => dispatch({ type: ADD_POST, payload: post }));

export const deletePost = id => dispatch =>
  API.deletePost(id).then(post => {
    dispatch({ type: DELETE_A_POST, payload: post });
  });

// comment
export const receiveComments = comments => ({
  type: GET_COMMENTS,
  comments
});

export const getComments = id => dispatch =>
  API.fetchComments(id).then(comments => dispatch(receiveComments(comments)));

export const upVoteComment = id => dispatch =>
  API.voteComment(id, "upVote").then(comment =>
    dispatch({ type: UPVOTE_A_COMMENT, comment })
  );
export const downVoteComment = id => dispatch =>
  API.voteComment(id, "downVote").then(comment =>
    dispatch({ type: DOWNVOTE_A_COMMENT, comment })
  );

export const addComment = newcomment => dispatch =>
  API.addComment(newcomment).then(newcomment =>
    dispatch({ type: ADD_A_COMMENT, newcomment })
  );

export const editComment = (id, edited) => dispatch =>
  API.editComment(id, edited).then(comment =>
    dispatch({ type: EDIT_A_COMMENT, id, comment: edited })
  );

export const deleteComment = id => dispatch =>
  API.deleteComment(id).then(comment => {
    dispatch({ type: DELETE_A_COMMENT, comment });
  });

export const changeSort = value => {
  return { type: CHANGE_SORT, value: value };
};
