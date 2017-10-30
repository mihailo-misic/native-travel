// @flow

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addNavigationHelpers, StackNavigator} from 'react-navigation'
import ucFirst from './common/helpers'

import Login from "./screens/Login";
import Register from "./screens/Register";
import Main from "./screens/Main";
import List from "./screens/List";
import LogoutButton from "./components/LogoutButton";
import Detail from "./screens/Detail";

const SignedOut = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
});

const SignedIn = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      headerTitle: "Serbia",
      headerLeft: null,
      headerRight: <LogoutButton/>
    }
  },
  List: {
    screen: List,
    navigationOptions: ({navigation}) => ({
      title: `${ucFirst(navigation.state.params.section)}`,
      headerRight: <LogoutButton/>
    })
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({navigation}) => ({
      title: `${ucFirst(navigation.state.params.item.name)}`,
      headerRight: <LogoutButton/>
    })
  },
});

export const AppNavigator = StackNavigator({
  SignedOut: {
    screen: SignedOut,
  },
  SignedIn: {
    screen: SignedIn,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
}, {initialRouteName: 'SignedOut'});

class AppWithNavigationState extends Component {
  render() {
    const {dispatch, nav} = this.props;
    const navigation = addNavigationHelpers({dispatch, state: nav});

    return <AppNavigator navigation={navigation}/>;
  }
}

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
