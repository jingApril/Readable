export const ADD_RECIPE = 'ADD_RECIPE'
export const REMOVE_FROM_CALENDAR = 'REMOVE_FROM_CALENDAR'


export function addPost ({ day, recipe, meal }) {
  return {
    type: ADD_POST,
    recipe,
    day,
    meal,
  }
}
export function deletePost ({ day, recipe, meal }) {
  return {
    type: DELETE_POST,
    recipe,
    day,
    meal,
  }
}

// export function removeFromCalendar ({ day, meal }) {
//   return {
//     type: REMOVE_FROM_CALENDAR,
//     day,
//     meal,
//   }
// }
