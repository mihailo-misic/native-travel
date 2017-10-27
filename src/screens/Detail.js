// @flow

import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {Card, Text} from "react-native-elements";
import PropTypes from 'prop-types';

class Detail extends Component {
  onCardPress(section) {
    this.props.navigation.navigate('List', {section})
  }

  render() {
    return (
      <ScrollView>
        <Image source={require('../../assets/img/serbia@x2.jpg')} style={styles.coverImage}/>

        {/* Map */}
        <TouchableOpacity onPress={() => this.onCardPress('Map')}>
          <Card containerStyle={{padding: 0}} flexDirection="row">
            <Image
              style={styles.thumbImage}
              resizeMode="cover"
              source={require('../../assets/img/map@x2.jpeg')}
            />
            <View style={styles.textBox}>
              <Text h4>Map</Text>
            </View>
          </Card>
        </TouchableOpacity>

        {/* Sights */}
        <TouchableOpacity onPress={() => this.onCardPress('sights')}>
          <Card containerStyle={{padding: 0}} flexDirection="row">
            <Image
              style={styles.thumbImage}
              resizeMode="cover"
              source={require('../../assets/img/sights@x2.png')}
            />
            <View style={styles.textBox}>
              <Text h4>Sights</Text>
            </View>
          </Card>
        </TouchableOpacity>

        {/* Hotels */}
        <TouchableOpacity onPress={() => this.onCardPress('national-parks')}>
          <Card containerStyle={{padding: 0}} flexDirection="row">
            <Image
              style={styles.thumbImage}
              resizeMode="cover"
              source={require('../../assets/img/hotels@x2.png')}
            />
            <View style={styles.textBox}>
              <Text h4>National parks</Text>
            </View>
          </Card>
        </TouchableOpacity>

        {/* Restaurants */}
        <TouchableOpacity onPress={() => this.onCardPress('national-parks')}>
          <Card containerStyle={{padding: 0}} flexDirection="row">
            <Image
              style={styles.thumbImage}
              resizeMode="cover"
              source={require('../../assets/img/restaurants@x2.jpg')}
            />
            <View style={styles.textBox}>
              <Text h4>Restaurants</Text>
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

Detail.propTypes = {
  navigation: PropTypes.object,
};

export default connect()(Detail)