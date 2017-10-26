// @flow

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers, StackNavigator} from 'react-navigation'

import Login from "./screens/Login";
import Register from "./screens/Register";
import Main from "./screens/Main";

export const AppNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
    },
  },
  Main: {
    screen: Main,
    navigationOptions: {
      headerTitle: "Serbia",
      headerLeft: null,
    }
  }
});

const AppWithNavigationState = ({dispatch, nav}) => (
  <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
