function getUUID()
 {
    return (Math.random().toString(36).substring(2)+(new Date()).getTime().toString(36));
}

class MaCompo extends Component {
 state = { data: '' }
 handleChange = e => this.setState({ data: e.target.value }); // works fine and actually updates state.data
 formSubmit = e => console.log(this.state); // undefined always
 render () {
  <Form onSubmit={this.formSubmit}>
   // ... running this.handleChange somewhere
  </Form>
 }
}


export const votePost = (postID, option) =>
    fetch(`${apiURL}/posts/${postID}`,
        {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ option })
        })
        .then(res => res.json())


 export function fetchComments(dispatch){
    return (dispatch) => {
      dispatch({
        type: FETCH_COMMENTS_SUCCESS,
      });

      ReaderAPI.fetchComments()
        .then((response) => {
          if (!response.ok) {
            console.log('__response NOT OK, fetchComments');
            throw Error(response.statusText);
          }
          // console.log('__response OK, fetchComments', response);
          return response;
        })

        .then((response) => response.json())
        .then((data) => {

          console.log('___data from comments API', data);
          // Comments are returned as an array
          //  change them to Comment objects where key===comment.id
          //  NO arrays in store
          const commentsAsObjects = data.reduce((acc, commentData)=>{
            return {
              ...acc,
              [commentData.id]: commentData,
            }
          }, {})

          return (
            dispatch({
              type: FETCH_COMMENTS_SUCCESS,
              comments: commentsAsObjects,
            })
          )}
        )

        .catch(err => {
          console.error(err);  //  in case of render error
          dispatch({
            type: FETCH_COMMENTS_FAILURE,
            err,
            error: true,
          })
        });

    };  // anon function(dispatch) wrapper
  };

What you’re going to need to do is use the React router url to update the store, not the Link’s onClick handler.
Here’s a hint, this.props.match.url or this.props.match.path helps a lot with this.


`onSubmit={this.postFormSubmit.bind(this)}`



	POST /posts
         USAGE:
           Add a new post

         PARAMS:
           id - UUID should be fine, but any unique id will work
           timestamp - timestamp in whatever format you like, you can use Date.now() if you like
           title - String
           body - String
           author - String
           category: Any of the categories listed in categories.js. Feel free to extend this list as you desire.



const initialState = {
    fetching: false,
    fetched: false,
    comments: [],
    error: null,
}

export default function commentsReducer (state = initialState, action) {

    switch (action.type) {
        case FETCH_COMMENTS_START :
            return {
                ...state,
                fetching: true
            }
        case FETCH_COMMENTS :
            return {
                ...state,
                fetching: false,
                fetched: true,
                comments: action.payload //.filter(comment => !comment.deleted)
            }
        case FETCH_COMMENTS_ERROR :
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            }
        default :
            return state;
    }

}


import {

    FETCH_POSTS_START,
    FETCH_POSTS,
    FETCH_POSTS_ERROR

} from "../actions/Posts";


const initialState = {
    fetching: false,
    fetched: false,
    posts: [],
    error: null
}

export default function postsReducer (state = initialState, action) {

    switch (action.type) {
        case FETCH_POSTS_START :
            return {
                ...state,
                fetching: true
            }
        case FETCH_POSTS :
            console.log(action.payload)
            return {
                ...state,
                fetched: true,
                fetching: false,
                posts: action.payload.filter(post => !post.deleted)
            }
        case FETCH_POSTS_ERROR :
            return {
                ...state,
                fetched: false,
                fetching: false,
                error: action.payload
            }
        default :
            return state;
    }
}

state.map(post => ( post.id === action.payload.id ? action.payload : post
))

this will update the post.