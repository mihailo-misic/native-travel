// @flow

import React, {Component} from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

class Spinner extends Component {
  render() {
    const {
      size
    } = this.props;

    return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size={size || 'large'}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Spinner.propTypes = {
  size: PropTypes.string,
};

export {Spinner};