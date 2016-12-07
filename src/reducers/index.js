import { combineReducers } from 'redux';
import ServiceReducer from './reducer_service_selected';
import FoodReducer from './reducer_food_selected';


const rootReducer = combineReducers({
  serviceStyle: ServiceReducer,
  food: FoodReducer
});

export default rootReducer;
