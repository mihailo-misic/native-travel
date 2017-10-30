// @flow

import firebase from 'firebase';

import {DATA_CLEAR, DATA_FETCH_SUCCESS, DATA_SORT_NAME, DATA_SORT_POP} from "./types";

export const dataClear = () => {
  return (dispatch) => dispatch({type: DATA_CLEAR})
};

export const dataFetch = (section: string) => {
  return (dispatch) => {
    firebase.database().ref(`/${section}`)
      .on('value', snapshot => {
        dispatch({type: DATA_FETCH_SUCCESS, payload: snapshot.val()})
      })
  }
};

export const dataSortPop = () => {
  return (dispatch) => dispatch({type: DATA_SORT_POP})
};

export const dataSortName = () => {
  return (dispatch) => dispatch({type: DATA_SORT_NAME})
};
