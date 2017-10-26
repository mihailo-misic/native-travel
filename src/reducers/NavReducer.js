import {NavigationActions} from 'react-navigation';

import {AppNavigator} from '../AppNavigator';
import {LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_SUCCESS} from "../actions/types";

const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const INITIAL_STATE = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

export default (state = INITIAL_STATE, action) => {
  let nextState;
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'Main'}),
        state
      );
      break;
    case REGISTER_USER_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'Main'}),
        state
      );
      break;
    case LOGOUT_USER:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'Login'}),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
