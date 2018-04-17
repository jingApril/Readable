import {
  GET_POSTS,
  GET_POSTS_BYCAT,
  GET_A_POST,
  ADD_POST,
  EDIT_A_POST,
  UPVOTE_A_POST,
  DOWNVOTE_A_POST,
  DELETE_A_POST
} from "../actions/actionTypes";

export default function posts(state = {}, action) {
  switch (action.type) {
    case "GET_POSTS":
      return action.payload;

    case "GET_POSTS_BYCAT":
      return {
        ...state,
        posts: action.payload
      };
    // case "UPVOTE_A_POST":
    // case "DOWNVOTE_A_POST":
    // console.log(action.payload.id)
    //   return state.map(
    //     post => (post.id === action.payload.id ? (post = action.payload) : post)
    //   );

      case 'UPVOTE_A_POST':
            return state.map(post => {
              if (post.id === action.payload) {
                post.voteScore += 1;
              }
              return post;
            });
          case 'DOWNVOTE_A_POST':
            return state.map(post => {
              if (post.id === action.payload) {
                post.voteScore -= 1;
              }
              return post;
            });






     // return{
     // post: action.payload
     //
     // }
    //  return state.map(
    //    post =>(post.id === action.post.id ? (post = action.post) : post)
    // );

    case "ADD_POST":
      return [action.payload, ...state];

    case "EDIT_A_POST":
      return state.map(
        post => (post.id === action.payload.id ? (post = action.payload) : post)
      );



    case "DELETE_A_POST":
      return state.filter(post => post.id !== action.payload.id);



    default:
      return state;
  }
}
