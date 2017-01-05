import { CLIENT_INFO_SELECTED } from '../actions/index';
const INITIAL_STATE = { info: ""};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case CLIENT_INFO_SELECTED:
      return { ...state, info: action.payload}
    default:
      return state
  }
}
