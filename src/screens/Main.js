// @flow

import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {Card, Text} from "react-native-elements";

import PropTypes from 'prop-types';
import {logoutUser} from "../actions/AuthActions";

class Main extends Component {
  onCardPress(section) {
    this.props.navigation.navigate('List', {section})
  }

  render() {
    return (
      <ScrollView>
        <Image source={require('../../assets/img/serbia@x2.jpg')} style={styles.coverImage}/>

        {/* Cities */}
        <TouchableOpacity onPress={() => this.onCardPress('cities')}>
          <Card containerStyle={{padding: 0}} flexDirection="row">
            <Image
              style={styles.thumbImage}
              resizeMode="cover"
              source={require('../../assets/img/city@x2.jpg')}
            />
            <View style={styles.textBox}>
              <Text h4>Cities</Text>
            </View>
          </Card>
        </TouchableOpacity>

        {/* Regions */}
        <TouchableOpacity onPress={() => this.onCardPress('regions')}>
          <Card containerStyle={{padding: 0}} flexDirection="row">
            <Image
              style={styles.thumbImage}
              resizeMode="cover"
              source={require('../../assets/img/region@x2.png')}
            />
            <View style={styles.textBox}>
              <Text h4>Regions</Text>
            </View>
          </Card>
        </TouchableOpacity>

        {/* National Parks */}
        <TouchableOpacity onPress={() => this.onCardPress('national-parks')}>
          <Card containerStyle={{padding: 0}} flexDirection="row">
            <Image
              style={styles.thumbImage}
              resizeMode="cover"
              source={require('../../assets/img/nat-park@x2.jpg')}
            />
            <View style={styles.textBox}>
              <Text h4>National parks</Text>
            </View>
          </Card>
        </TouchableOpacity>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  coverImage: {
    height: 200,
    width: "100%",
  },
  thumbImage: {
    width: 80,
    height: 80,
  },
  textBox: {
    justifyContent: 'center',
    padding: 10,
  }
});

Main.propTypes = {
  navigation: PropTypes.object,
};

export default connect(null, {logoutUser})(Main)