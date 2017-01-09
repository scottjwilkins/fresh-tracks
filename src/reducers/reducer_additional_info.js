import { ADDITIONAL_INFO } from '../actions/index';
const INITIAL_STATE = { info: ""};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADDITIONAL_INFO:
      return { ...state, info: action.payload}
    default:
      return state
  }
}
