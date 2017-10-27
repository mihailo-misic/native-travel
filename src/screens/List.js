// @flow

import React, {Component} from 'react';
import {Image, ListView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ButtonGroup, Card, Text} from "react-native-elements";
import _ from 'lodash';

import {dataFetch} from "../actions/DataActions";

class List extends Component {
  constructor() {
    super();
    this.state = {
      sIndex: 0
    };
    this.onOrderPress = this.onOrderPress.bind(this)
  }

  componentWillMount() {
    this.props.dataFetch();

    this.createDataSource(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps)
  }

  createDataSource({data}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(data)
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

  renderRow(obj) {
    return (<TouchableOpacity onPress={() => this.onCardPress('cities')}>
        <Card containerStyle={{padding: 0}} flexDirection="row">
          <Image
            style={styles.thumbImage}
            resizeMode="cover"
            source={require(`../../assets/img/city@x2.jpg`)}
          />
          <View style={styles.textBox}>
            <Text h4>{obj.name}</Text>
            <Text h5>{obj.pop} residents</Text>
          </View>
        </Card>
      </TouchableOpacity>
    );
  }

  render() {
    const buttons = ['Popular', 'A-Z',];
    const {sIndex} = this.state;

    return (
      <View>
        <Card containerStyle={styles.coverCard}>
          <ButtonGroup
            onPress={this.onOrderPress}
            selectedIndex={sIndex}
            buttons={buttons}
            containerStyle={{height: 30}}/>
        </Card>

        {/* Cities */}
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
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
  const data = _.map(state.data, (val, uid) => {
    return {...val, uid};
  });

  return {data}
};

export default connect(mapStateToProps, {dataFetch})(List)