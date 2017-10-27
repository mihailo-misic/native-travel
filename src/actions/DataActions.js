import firebase from 'firebase';

import {DATA_FETCH_SUCCESS} from "../actions/types";

export const dataFetch = () => {
  // const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/cities`)
      .on('value', snapshot => {
        dispatch({type: DATA_FETCH_SUCCESS, payload: snapshot.val()})
      })
  }
};
