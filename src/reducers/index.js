import { combineReducers } from 'redux';
import ServiceReducer from './reducer_service_selected';
import NavbarReducer from './reducer_navbar_selected';
import FoodReducer from './reducer_food_selected';
import ClientInfoReducer from './reducer_client_info';
import { reducer as formReducer} from 'redux-form';


const rootReducer = combineReducers({
  serviceStyle: ServiceReducer,
  food: FoodReducer,
  navbar: NavbarReducer,
  form: formReducer,
  clientInfo: ClientInfoReducer,
});

export default rootReducer;
