// @flow

import React, {Component} from 'react';
import {Button, StyleSheet} from 'react-native';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {logoutUser} from "../actions/AuthActions";

class Main extends Component {
  onLogoutPress() {
    this.props.logoutUser()
  }

  render() {
    return (
      <Button
        title="Logout"
        onPress={this.onLogoutPress.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({});

Main.propTypes = {
  logoutUser: PropTypes.func,
};

export default connect(null, {logoutUser})(Main)