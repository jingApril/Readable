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

// {
//   byId: {
//     post1: {
//       id: "post1",
//             ...
//     },
//     post2: {
//       id: "post2",
//             ...
//     }
//   },
//   allIds: ["post1", "post2"]
// }

export default function posts(state = [], action) {
  switch (action.type) {
    case "GET_POSTS":
      //		return action.posts

      // return [
      //    ...state,
      //    {
      // 	 byId: action.posts,
      // 	 allIds: action.posts.id
      //    }
      //  ]

      return action.payload;

    case "GET_POSTS_BYCAT":
      return {
        ...state,
        posts: action.payload
      };

    // return action.payload;

    //return [action.payload, ...state];

    case "UPVOTE_A_POST":
    case "DOWNVOTE_A_POST":
      // return state.map(
      // 	post => (post.id === action.post.id)
      // 	? post = action.post
      // 	: post);

      return state.map(
        post => (post.id === action.payload.id ? (post = action.payload) : post)
      );

    case "ADD_POST":
      // return {
      //  ...state,
      //   newpost: action.post
      //  }

      return [action.payload, ...state];

    case "GET_A_POST":
      // return state.map(post => {
      //   return post.id === action.post.id ? action.post : post;
      // });

      return {
        ...state,
        payload: action.payload
      };

      {
        console.log(action);
      }
    case "EDIT_A_POST":
      // return state.map(post => {
      //   return post.id === action.post.id ? action.post : post;
      // });

      // return state.map(post => {
      //         if(post.id === action.payload.id) {
      //           return action.payload;
      //         }
      //         return post;
      //       });
      return state.map(
        post => (post.id === action.payload.id ? (post = action.payload) : post)
      );

    case "DELETE_A_POST":
      //return state.filter(post => post.id !== action.id);
      return state.filter(post => post.id !== action.payload.id);

    default:
      return state;
  }
}
