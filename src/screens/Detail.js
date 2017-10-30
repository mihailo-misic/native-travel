// @flow

import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {Card, Icon, Text} from "react-native-elements";
import PropTypes from 'prop-types';

import Sourcer from '../../assets/img/Sourcer';

class Detail extends Component {
  onCardPress(section) {
    this.props.navigation.navigate('List', {section})
  }

  render() {
    const {item} = this.props.navigation.state.params;

    return (
      <ScrollView>
        <Image source={Sourcer.getImage(item.image)} style={styles.coverImage}/>

        {/* Map */}
        <TouchableOpacity onPress={() => this.onCardPress('map')}>
          <Card containerStyle={{padding: 0}} flexDirection="row">
            <Icon
              name="google-maps"
              style={styles.thumbIcon}
              size={40}
              type="material-community"
              color="#42A5F5"
            />
            <View style={styles.textBox}>
              <Text h4>Map</Text>
            </View>
          </Card>
        </TouchableOpacity>

        {/* Sights */}
        <TouchableOpacity onPress={() => this.onCardPress('sights')}>
          <Card containerStyle={{padding: 0}} flexDirection="row">
            <Icon
              name="camera"
              style={styles.thumbIcon}
              size={40}
              type="material-community"
              color="#42A5F5"
            />
            <View style={styles.textBox}>
              <Text h4>Sights</Text>
            </View>
          </Card>
        </TouchableOpacity>

        {/* Hotels */}
        <TouchableOpacity onPress={() => this.onCardPress('hotels')}>
          <Card containerStyle={{padding: 0}} flexDirection="row">
            <Icon
              name="hotel"
              style={styles.thumbIcon}
              size={40}
              type="material-community"
              color="#42A5F5"
            />
            <View style={styles.textBox}>
              <Text h4>Hotels</Text>
            </View>
          </Card>
        </TouchableOpacity>

        {/* Restaurants */}
        <TouchableOpacity onPress={() => this.onCardPress('restaurants')}>
          <Card containerStyle={{padding: 0}} flexDirection="row">
            <Icon
              name="restaurant-menu"
              style={styles.thumbIcon}
              size={40}
              type="material"
              color="#42A5F5"
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
  thumbIcon: {
    width: 60,
    height: 60,
    padding: 10,
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