import { GET_CATEGORIES } from "../actions/actionTypes";

export default function categories(categories = [], action) {
  switch (action.type) {
    case "GET_CATEGORIES":
      return action.categories;
    default:
      return categories;
  }
}
