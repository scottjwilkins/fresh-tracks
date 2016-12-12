import { NAVBAR_SELECTED } from '../actions/index';
const INITIAL_STATE = { choice: "home"};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case NAVBAR_SELECTED:
      return { ...state, choice: action.payload}
    default:
      return state
  }
}
