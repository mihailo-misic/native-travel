/**
 * Native Travel React Native App
 * https://github.com/mihailo-misic/native-travel
 * @flow
 */

import firebase from 'firebase';
import React, {Component} from 'react';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import ReduxThunk from 'redux-thunk'

import reducers from './src/reducers'
import AppWithNavigationState from './src/AppNavigator';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(fireBaseConfig)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    )
  }
}

const fireBaseConfig = {
  apiKey: "AIzaSyAoybioavJ94ZAz5FWUC-yWHidtngrM5_A",
  authDomain: "native-travel.firebaseapp.com",
  databaseURL: "https://native-travel.firebaseio.com",
  projectId: "native-travel",
  storageBucket: "native-travel.appspot.com",
  messagingSenderId: "1060991437832",
};
