import { FOOD_SELECTED } from '../actions/index';
const INITIAL_STATE = { appetizers: ["shrimp", "grits", "falafel"]};
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FOOD_SELECTED:
      return { ...state, appetizers: action.payload};
    default:
      return state
  }
}
