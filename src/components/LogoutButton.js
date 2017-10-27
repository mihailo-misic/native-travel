// @flow

import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Icon} from "react-native-elements";
import {logoutUser} from "../actions/AuthActions";
import PropTypes from "prop-types";

class LogoutButton extends Component {
  onLogoutPress() {
    this.props.logoutUser()
  }

  render() {
    return (
      <Icon
        size={15}
        raised={true}
        name="power"
        type="simple-line-icon"
        color="gray"
        containerStyle={styles.buttonStyle}
        onPress={this.onLogoutPress.bind(this)}
      />
    )
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    elevation: 5,
    shadowColor: '#333',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: 2,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 50,
    marginRight: 8
  }
});

LogoutButton.propTypes = {
  logoutUser: PropTypes.func,
};

export default connect(null, {logoutUser})(LogoutButton)