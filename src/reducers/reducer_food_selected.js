import { APP_SELECTED, BUFFET_SELECTED, BEVERAGE_SELECTED } from '../actions/index';
const INITIAL_STATE = {
  appetizers: [
    "Garlic naan flat bread pizza",
    "Domestic Cheese",
    "Tequila lime marinated flank steak skewers"
  ],
  buffet: [
    "honey whole wheat"
  ],
  beverages: [],
};
export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case APP_SELECTED:
       if(state.appetizers.indexOf(action.payload.target.value) !== -1) {
         let apps = state.appetizers;
         apps.splice(apps.indexOf(action.payload.target.value), 1)
         return { ...state, appetizers: apps};
       } else {
         return { ...state, appetizers: [...state.appetizers, action.payload.target.value]};
       }
    case BUFFET_SELECTED:
       if(state.buffet.indexOf(action.payload.target.value) !== -1) {
         let buff = state.buffet;
         buff.splice(buff.indexOf(action.payload.target.value), 1)
         return { ...state, buffet: buff};
       } else {
         return { ...state, buffet: [...state.buffet, action.payload.target.value]};
       }
    case BEVERAGE_SELECTED:
       if(state.beverages.indexOf(action.payload.target.value) !== -1) {
         let bev = state.beverages;
         bev.splice(bev.indexOf(action.payload.target.value), 1)
         return { ...state, beverages: bev};
       } else {
         return { ...state, beverages: [...state.beverages, action.payload.target.value]};
       }

    default:
      return state
  }
}
