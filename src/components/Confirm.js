// @flow

import React, {Component} from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import {Button, CardSection} from './index'

class Confirm extends Component {
  render() {
    const {children, visible, onAccept, onDecline} = this.props;

    return (
      <Modal
        transparent
        visible={visible}
        animationType="slide"
        onRequestClose={() => null}
      >
        <View style={styles.containerStyle}>
          <CardSection style={styles.cardSectionStyle}>
            <Text style={styles.textStyle}>{children}</Text>
          </CardSection>
          <CardSection>
            <Button onPress={onAccept}>YES</Button>
            <Button onPress={onDecline}>NO</Button>
          </CardSection>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, .75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

Confirm.propTypes = {
  children: PropTypes.node,
  visible: PropTypes.bool,
  onAccept: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
};

export {Confirm}