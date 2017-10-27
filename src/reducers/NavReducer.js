import {NavigationActions} from 'react-navigation';

import {AppNavigator} from '../AppNavigator';
import {LOGIN_USER_SUCCESS, LOGOUT_USER, REGISTER_USER_SUCCESS} from "../actions/types";

const INITIAL_STATE = AppNavigator.router.getStateForAction('SignedOut');

export default (state = INITIAL_STATE, action) => {
  let nextState;
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'SignedIn'}),
        state
      );
      break;
    case REGISTER_USER_SUCCESS:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'SignedIn'}),
        state
      );
      break;
    case LOGOUT_USER:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.navigate({routeName: 'SignedOut'}),
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
