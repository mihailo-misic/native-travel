// @flow

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import {Button, Card, Divider, FormInput, FormLabel, FormValidationMessage} from "react-native-elements";
import PropTypes from 'prop-types';

import {emailChanged, firstNameChanged, lastNameChanged, passwordChanged, registerUser, repPasswordChanged} from "../actions/AuthActions";

class Register extends Component {
  onEmailChange(val) {
    this.props.emailChanged(val);
  }

  onPasswordChange(val) {
    this.props.passwordChanged(val)
  }

  onRepPasswordChange(val) {
    this.props.repPasswordChanged(val)
  }

  onFirstNameChange(val) {
    this.props.firstNameChanged(val)
  }

  onLastNameChange(val) {
    this.props.lastNameChanged(val)
  }

  onRegisterPress() {
    const {email, password, firstName, lastName} = this.props;
    this.props.registerUser({email, password, firstName, lastName});
  }

  renderErrorMsgs() {
    const {errors} = this.props;

    if (Object.keys(errors).length) {
      let errs = [];
      for (let key in errors) {
        if (errors.hasOwnProperty(key))
          errs.push(<FormValidationMessage key={key}>{errors[key]}</FormValidationMessage>)
      }
      return errs
    }

    return null
  }

  render() {
    return (
      <View style={{justifyContent: 'center', flex: 1}}>
        <Card title="Register">
          {/* Form Errors */}
          {this.renderErrorMsgs()}

          <View style={styles.row}>
            {/* Email */}
            <View style={styles.row}>
              <FormLabel>Email</FormLabel>
              <FormInput
                autoCapitalize="none"
                autoCorrect={false}
                autoFocus={true}
                keyboardType="email-address"
                placeholder="user@gmail.com"
                returnKeyType="next"
                selectionColor="#44D1FF"
                onChangeText={this.onEmailChange.bind(this)}
              />
            </View>

            {/* Password */}
            <View style={styles.row}>
              <FormLabel>Password</FormLabel>
              <FormInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="pa$$word123"
                secureTextEntry={true}
                selectionColor="#44D1FF"
                returnKeyType="next"
                onChangeText={this.onPasswordChange.bind(this)}
              />
            </View>

            {/* Repeat Password */}
            <View style={styles.row}>
              <FormLabel>Repeat Password</FormLabel>
              <FormInput
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="pa$$word123"
                secureTextEntry={true}
                selectionColor="#44D1FF"
                returnKeyType="next"
                onChangeText={this.onRepPasswordChange.bind(this)}
              />
            </View>

            {/* First name */}
            <View style={styles.row}>
              <FormLabel>First Name</FormLabel>
              <FormInput
                autoCapitalize="words"
                autoCorrect={false}
                placeholder="John"
                returnKeyType="next"
                selectionColor="#44D1FF"
                onChangeText={this.onFirstNameChange.bind(this)}
              />
            </View>

            {/* Last name */}
            <View style={styles.row}>
              <FormLabel>Last Name</FormLabel>
              <FormInput
                autoCapitalize="words"
                autoCorrect={false}
                placeholder="Doe"
                returnKeyType="next"
                selectionColor="#44D1FF"
                onChangeText={this.onLastNameChange.bind(this)}
              />
            </View>
          </View>

          <Divider/>

          {/* Buttons */}
          <View style={{flexDirection: 'row', paddingTop: 20}}>
            <View style={{width: '50%'}}>
              <Button
                title="Back"
                onPress={() => this.props.navigation.goBack()}
                buttonStyle={{backgroundColor: '#03a9f4'}}
                containerViewStyle={{marginLeft: 0, marginRight: 5}}
              />
            </View>
            <View style={{width: '50%'}}>
              <Button
                title="Register"
                disabled={this.props.loading}
                onPress={this.onRegisterPress.bind(this)}
                buttonStyle={{backgroundColor: '#03a9f4'}}
                containerViewStyle={{marginLeft: 5, marginRight: 0}}
              />
            </View>
          </View>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    marginBottom: 10
  },
});

Register.propTypes = {
  navigation: PropTypes.object,
  emailChanged: PropTypes.func,
  passwordChanged: PropTypes.func,
  repPasswordChanged: PropTypes.func,
  firstNameChanged: PropTypes.func,
  lastNameChanged: PropTypes.func,
  registerUser: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  repPassword: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  loading: PropTypes.bool,
  errors: PropTypes.object,
};

const mapStateToProps = ({auth}) => {
  const {email, password, repPassword, firstName, lastName, errors, loading} = auth;
  return {email, password, repPassword, firstName, lastName, errors, loading};
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  repPasswordChanged,
  firstNameChanged,
  lastNameChanged,
  registerUser,
})(Register)
