import * as API from '../util/api'

// 获得 get post
export const FETCH_POSTS = "FETCH_POST";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export const RESET_POSTS = "RESET_POSTS";


// 删除 delete post
export const DELETE_POST = "DELETE_POST";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";
export const RESET_DELETE_POST = "RESET_DELETE_POST";

// 获取所有的分类 get categories Actions

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
})
export const fetchAllCategories = () => dispatch => (
    API.fetchAllCategories()
        .then(categories => dispatch(receiveCategories(categories)))
)

// 获取某个分类帖子  posts by category Actions
export const REQUEST_CATEGORY_POSTS = 'REQUEST_CATEGORY_POSTS'
export const GET_CATEGORY_POSTS = 'GET_CATEGORY_POSTS'
export const requestPostsByCat = (category,postsByCat) => ({
    type: GET_CATEGORY_POSTS,
    category,
    postsByCat
})
export const fetchPostsByCat = (category) => dispatch => (
    API.fetchPostsByCategory(category)
        .then(data => dispatch(requestPostsByCat(category, data)))
)


// 获取所有帖子 get all posts Actions
export const GET_POSTS = 'GET_POSTS'
export const receiveAllPosts = (allposts) => ({
    type: GET_POSTS,
    allposts
})
export const fetchAllPosts = () => dispatch => (
    API.fetchAllPosts()
        .then(allposts => dispatch(receiveAllPosts(allposts)))
)


// 创建帖子 create post
export const CREATE_POST = "CREATE_POST";
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
export const CREATE_POST_FAILURE = "CREATE_POST_FAILURE";
export const RESET_NEW_POST = "RESET_NEW_POST";


export const createPost =  () => ({
    type: CREATE_POST,
})

export const createPostSuccess =  () => ({
    type: CREATE_POST_SUCCESS,
})

export const createPostFailure =  () => ({
    type: CREATE_POST_FAILURE,
})

export const resetNewPost =  () => ({
    type: RESET_NEW_POST,
})




// 删除 delete post
// export const FETCH_COMMENTS = "FETCH_COMMENTS";
// export const FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS";
// export const FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE";
// export const RESET_DELETE_POST = "RESET_DELETE_POST";
//
//
// export const requestComments =  (id,comments) => ({
//     type: FETCH_COMMENTS_SUCCESS,
//     id,
//     comments
// })
//
//
// export const fetchComments = () => dispatch => (
//     API.fetchComments(id)
//         .then(comments => dispatch(requestComments(id,comments)))
//         .then((response) => {
//           if (!response.ok) {
//             console.log('__response NOT OK, fetchComments');
//             throw Error(response.statusText);
//           }
//           // console.log('__response OK, fetchComments', response);
//           return response;
//         })
//
//         .then((response) => response.json())
//         .then((data) => {
//
//           console.log('___data from comments API', data);
//           // Comments are returned as an array
//           //  change them to Comment objects where key===comment.id
//           //  NO arrays in store
//           const commentsAsObjects = data.reduce((acc, commentData)=>{
//             return {
//               ...acc,
//               [commentData.id]: commentData,
//             }
//           }, {})
//
//           return (
//             dispatch({
//               type: FETCH_COMMENTS_SUCCESS,
//               comments: commentsAsObjects,
//             })
//           )}
//         )
//
//         .catch(err => {
//           console.error(err);  //  in case of render error
//           dispatch({
//             type: FETCH_COMMENTS_FAILURE,
//             err,
//             error: true,
//           })
//         });
//
// )





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
