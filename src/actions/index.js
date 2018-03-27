import * as Api from '../Util/api'

export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";


export function addPost ({ id }) {
  return {
    type: ADD_POST,
    post
  }
}
export function deletePost ({ id }) {
  return {
    type: DELETE_POST,
    recipe,
    id,
    meal,
  }
}
