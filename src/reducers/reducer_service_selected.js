import { SERVICE_SELECTED } from '../actions/index';
const INITIAL_STATE = { style: null};

export default function(state = INITIAL_STATE, action) {
  //console.log(state.food);
  switch(action.type) {
    case SERVICE_SELECTED:
      //console.log({ ...state, serviceStyle: action.payload}.serviceStyle);
      return { ...state, style: action.payload}
    default:
      return state
  }
}
