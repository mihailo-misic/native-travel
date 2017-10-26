// @flow

import firebase from 'firebase';

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
  REP_PASSWORD_CHANGED,
} from "./types";

// Auth properties changed
export const emailChanged = (payload) => {
  return {type: EMAIL_CHANGED, payload}
};
export const passwordChanged = (payload) => {
  return {type: PASSWORD_CHANGED, payload}
};
export const repPasswordChanged = (payload) => {
  return {type: REP_PASSWORD_CHANGED, payload}
};
export const firstNameChanged = (payload) => {
  return {type: FIRST_NAME_CHANGED, payload}
};
export const lastNameChanged = (payload) => {
  return {type: LAST_NAME_CHANGED, payload}
};

// Login
export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch))
  }
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user,
  });
};

const loginUserFail = (dispatch) => {
  dispatch({type: LOGIN_USER_FAIL});
};

// Registration
export const registerUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: REGISTER_USER});

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => registerUserSuccess(dispatch, user))
      .catch(() => registerUserFail(dispatch))
  }
};

const registerUserSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user,
  });
};

const registerUserFail = (dispatch) => {
  dispatch({type: REGISTER_USER_FAIL});
};

// Logout
export const logoutUser = () => {
  return (dispatch) => {
    dispatch({type: LOGOUT_USER});

    firebase.auth().signOut()
  }
};
