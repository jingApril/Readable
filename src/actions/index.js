import * as API from '../util/api'

export const GET_CATEGORIES = 'GET_CATEGORIES'

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_BYCAT = 'GET_POSTS_BYCAT'


export const ADD_A_COMMENT = 'ADD_A_COMMENT'
export const GET_A_COMMENT = 'GET_A_COMMENT'
export const VOTE_A_COMMENT = 'VOTE_A_COMMENT'
export const EDIT_A_COMMENT = 'EDIT_A_COMMENT'
export const DELETE_A_COMMENT = 'DELETE_A_COMMENT'

//
export const receiveCategories = categories => ({
  type: GET_CATEGORIES,
  categories
})
export const getAllCategories = () => dispatch => (
  API.fetchAllCategories()
  .then(categories => dispatch(receiveCategories(categories)))
)

export const receivePosts = (posts) => ({
    type: GET_POSTS,
    posts
  })

export const getPosts = () => dispatch => (
  API.fetchPosts()
    .then(posts => dispatch(receivePosts(posts)))
)

export const getPostsbyCategory = (category) => dispatch => (
  API.fetchPostsByCategory(category)
    .then((posts) => {
      dispatch({
        type: GET_POSTS_BYCAT,
        posts
      })
    })
)

export const UPVOTE_A_POST = 'UPVOTE_A_POST'
export const DOWNVOTE_A_POST = 'DOWNVOTE_A_POST'
export const EDIT_A_POST = 'EDIT_A_POST'
export const DELETE_A_POST = 'DELETE_A_POST'

export const upVotePost = (id) => dispatch => (
	API.votePost(id, "upVote")
	.then((post) => dispatch({
		type: UPVOTE_A_POST,
		post
	}))
	);

export const downVotePost = (id) => dispatch => (
	API.votePost(id, "downVote")
	.then((post) => dispatch({
		type: DOWNVOTE_A_POST,
		post
	}))
	);

export const editPost = (id, post) => dispatch => (
	API.editPost(id, post)
	.then((post) => {
		dispatch({
			type: EDIT_A_POST,
			id,
			post
		})
	})
	);

export const deletePost = (id) => dispatch => (
    API.deletePost(id)
        .then(() => dispatch({
            type: DELETE_A_POST,
            id
        }))
	);

export const ADD_POST = 'ADD_POST'
export const addPost = (post) => dispatch => (
	API.newPost(post)
	.then(post => dispatch({
		type: ADD_POST,
		post
	}))
	)

export const GET_A_POST = 'GET_A_POST'
export const GET_COMMENTS = 'GET_COMMENTS'



export const receiveOnePost = (post) => ({
  type: GET_A_POST,
  post
})

export const getOnePost = (id) => dispatch => (
  API.fetchOnePost(id)
  .then(post => dispatch(receiveOnePost(post)))
)
