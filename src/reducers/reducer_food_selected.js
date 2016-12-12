import { APP_SELECTED, BEVERAGE_SELECTED, DESSERT_SELECTED, MUNCHIES_SELECTED, GLASSWARE_SELECTED, BREAD_SELECTED, SIDES_SELECTED, ENTREES_SELECTED, SALAD_SELECTED } from '../actions/index';

const INITIAL_STATE = {
  appetizers: [],
  beverages: [],
  dessert: [],
  munchies: [],
  glassware: [],
  bread: [],
  sides: [],
  entrees: [],
  salad: []
};
export default function(state = INITIAL_STATE, action) {

  function stateDelegator(food) {
    if(state[food].indexOf(action.payload.target.value) !== -1) {
      let items = state[food];
      items.splice(items.indexOf(action.payload.target.value), 1)
      return { ...state, [food]: items};
    } else {
      return { ...state, [food]: [...state[food], action.payload.target.value]};
    }

  }
  switch(action.type) {
    case APP_SELECTED:
      return stateDelegator("appetizers");
    case BEVERAGE_SELECTED:
      return stateDelegator("beverages");
    case DESSERT_SELECTED:
      return stateDelegator("dessert");
    case MUNCHIES_SELECTED:
      return stateDelegator("munchies");
    case GLASSWARE_SELECTED:
      return stateDelegator("glassware");
    case BREAD_SELECTED:
      return stateDelegator("bread");
    case SIDES_SELECTED:
      return stateDelegator("sides");
    case SALAD_SELECTED:
      return stateDelegator("salad");
    case ENTREES_SELECTED:
      return stateDelegator("entrees");
    default:
      return state
  }
}
