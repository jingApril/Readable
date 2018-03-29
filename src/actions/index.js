import * as api from '../utils/api'

// 导出post
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const FETCH_POSTS = "FETCH_POST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const RESET_POSTS = "RESET_POSTS";

// 创建post
export const CREATE_POST = "CREATE_POST ";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";
export const RESET_NEW_POST = "RESET_NEW_POST";

// 删除post
export const DELETE_POST = "DELETE_POST ";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";
export const RESET_DELETE_POST = "RESET_DELETE_POST";



// export const receiveCategories = (categories) => {
//  return {
//    type: RECEIVE_CATEGORIES,
//    categories
//  }
// }
//
// export const getAllCategories = () => {
//  return (dispatch) => {
//      axios
//      .get(`${api}/categories`, {headers})
//      .then(({ data }) => {
//        dispatch(receiveCategories((data)))
//      })
//  }
// }
// export function fetchPosts(posts,error, loading) {
//     // const request = axios.get(`${ROOT_URL}/posts`);
//      return {
//      type: FETCH_POSTS,
//      payload:{
//        posts,
//        error,
//        loading
//      }
//  }
// }

export const receiveCategories = (categories) => {
 return {
   type: RECEIVE_CATEGORIES,
   categories
 }
}

export const getAllCategories = () => {
 return (dispatch) => {
     axios
     .get(`${api}/categories`, {headers})
     .then(({ data }) => {
       dispatch(receiveCategories((data)))
     })
 }
}

// export function newPost(someValue) {
//     return (dispatch, getState) => {
//         dispatch({type : "REQUEST_STARTED"});
//
//         myAjaxLib.post("/someEndpoint", {data : someValue})
//             .then(response => dispatch({type : "REQUEST_SUCCEEDED", payload : response})
//             .catch(error => dispatch({type : "REQUEST_FAILED", error : error});
//     };
// }



// export function fetchPostsSuccess(posts) {
//      return {
//      type: FETCH_POSTS_SUCCESS,
//      postsList: posts
//      };
// }
//
// export function fetchPostsFailure(error) {
//      return {
//      type: FETCH_POSTS_FAILURE,
//      postsList: error
//      };
// }
//
// export function createPost() {
//      return {
//      type: CREATE_POST,
//      payload: fetchAllPost
//      };
// }
//
// export function createPostSuccess() {
//      return {
//      type: CREATE_POST_SUCCESS,
//      payload: fetchAllPost
//      };
// }
//
// export function createPostFailure(error) {
//      return {
//      type: CREATE_POST_FAILURE,
//      payload: error
//      };
// }
//
// export function resetNewPost() {
//      return {
//      type: RESET_NEW_POST,
//      payload: null
//      };
// }
//
// export function deletePost() {
//      return {
//      type: DELETE_POST,
//      payload: fetchAllPost
//      };
// }
//
// export function deletePostSuccess() {
//      return {
//      type: DELETE_POST_SUCCESS,
//      payload: fetchAllPost
//      };
// }
//
// export function deletePostFailure(error) {
//      return {
//      type: DELETE_POST_FAILURE,
//      payload: error
//      };
// }
//
// export function resetDeletePost() {
//      return {
//      type: RESET_DELETE_POST,
//      payload: fetchAllPost
//      };
// }
