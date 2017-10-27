import {combineReducers} from 'redux';
import AuthReducer from "./AuthReducer";
import NavReducer from "./NavReducer";
import DataReducer from "./DataReducer";

export default combineReducers({
  auth: AuthReducer,
  nav: NavReducer,
  data: DataReducer,
})
