// @flow

import validator from 'validator';
import {
  EMAIL_CHANGED,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  LOGIN_USER,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  PASSWORD_CHANGED,
  REGISTER_USER,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REP_PASSWORD_CHANGED
} from "../actions/types";

const INITIAL_STATE = {
  email: '',
  password: '',
  repPassword: '',
  firstName: '',
  lastName: '',
  errors: {},
  loading: false,
  isLoggedIn: false,
  user: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Auth properties changed
    case EMAIL_CHANGED:
      delete state.errors.auth;
      if (!validator.isEmail(action.payload)) {
        return {...state, email: action.payload, errors: {...state.errors, email: 'Invalid email'}};
      }
      delete state.errors.email;
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      delete state.errors.auth;
      if (!validator.isLength(action.payload, {min: 6})) {
        return {...state, password: action.payload, errors: {...state.errors, password: 'Invalid password'}};
      }
      delete state.errors.password;
      return {...state, password: action.payload};
    case REP_PASSWORD_CHANGED:
      delete state.errors.auth;
      if (state.password !== action.payload) {
        return {...state, repPassword: action.payload, errors: {...state.errors, repPassword: 'Password do not match'}};
      }
      delete state.errors.repPassword;
      return {...state, repPassword: action.payload};
    case FIRST_NAME_CHANGED:
      delete state.errors.auth;
      return {...state, firstName: action.payload};
    case LAST_NAME_CHANGED:
      delete state.errors.auth;
      return {...state, lastName: action.payload};

    // Login
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        isLoggedIn: true,
        user: action.payload
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        errors: {auth: 'Authentication Failed!'},
        password: '',
        loading: false,
      };
    case LOGIN_USER:
      return {...state, loading: true, errors: {}};

    // Register
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        isLoggedIn: true,
        user: action.payload
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        errors: {auth: 'Registration Failed!'},
        password: '',
        loading: false,
      };
    case REGISTER_USER:
      return {...state, loading: true, errors: {}};

    case LOGOUT_USER:
      return {...state, ...INITIAL_STATE};

    default:
      return state
  }
}