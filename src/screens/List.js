// @flow

import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ButtonGroup, Card, Text} from "react-native-elements";
import _ from 'lodash';

import {dataFetch} from "../actions/DataActions";
import {Spinner} from "../components/Spinner";

class List extends Component {
  renderRow = ({index, item}) => {
    return (
      <TouchableOpacity onPress={() => this.onCardPress(item)}>
        <Card containerStyle={{padding: 0}} flexDirection="row">
          <Image
            style={styles.thumbImage}
            resizeMode="cover"
            source={require(`../../assets/img/ph.png`)}
          />
          <View style={styles.textBox}>
            <Text h4>{item.name}</Text>
            <Text h5>{item.pop} residents</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  };

  componentWillMount() {
    this.props.dataFetch();
  }

  onOrderPress(sIndex) {
    if (this.state.sIndex === sIndex) {
      return
    }

    this.setState({sIndex});
    sIndex === 0 ? this.orderByPopularity() : this.orderByName();
  }

  orderByPopularity() {
    console.log("ORDERING BY POP")
  }

  orderByName() {
    console.log("ORDERING BY Name")
  }

  constructor() {
    super();
    this.state = {
      sIndex: 0
    };

    this.onOrderPress = this.onOrderPress.bind(this);
  }

  keyExtractor(item, index) {
    return index;
  }

  onCardPress(details) {
    this.props.navigation.navigate('Detail', {item: details})
  }

  renderList() {
    if (this.props.data[0]) {
      return (
        <FlatList
          enableEmptySections
          data={this.props.data}
          extraData={this.props}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderRow}
        />
      )
    }

    return (
      <View style={{paddingTop: 60}}>
        <Spinner size="large"/>
      </View>
    )
  }

  render() {
    const buttons = ['Popular', 'A-Z',];
    const {sIndex} = this.state;

    return (
      <View style={{flex: 1}}>
        <Card containerStyle={styles.coverCard}>
          <ButtonGroup
            onPress={this.onOrderPress}
            selectedIndex={sIndex}
            buttons={buttons}
            containerStyle={{height: 30}}/>
        </Card>

        {/* Cities */}
        {this.renderList()}
      </View>
    )
  }
}

const
  styles = StyleSheet.create({
    coverCard: {
      marginTop: 0,
      marginLeft: 0,
      marginRight: 0,
      padding: 5,
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

List.propTypes = {
  navigation: PropTypes.object,
  dataFetch: PropTypes.func,
};

const mapStateToProps = (state) => {
  const data = _.map(state.data.data, (val, uid) => {
    return {...val, uid};
  });

  return {data}
};

export default connect(mapStateToProps, {dataFetch})(List)