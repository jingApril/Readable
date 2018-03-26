export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";


export function addPost ({ id, recipe, meal }) {
  return {
    type: ADD_POST,
    recipe,
    id,
    meal,
  }
}
export function deletePost ({ id, recipe, meal }) {
  return {
    type: DELETE_POST,
    recipe,
    id,
    meal,
  }
}
