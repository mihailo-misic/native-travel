// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {StyleSheet, View} from "react-native";
import {Button, Card, Divider, FormInput, FormLabel, FormValidationMessage} from "react-native-elements";

import {emailChanged, loginUser, passwordChanged} from "../actions/AuthActions";

class Login extends Component {
  onEmailChange(val) {
    this.props.emailChanged(val);
  }

  onPasswordChange(val) {
    this.props.passwordChanged(val)
  }

  onLoginPress() {
    const {email, password} = this.props;
    this.props.loginUser({email, password});
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
        <Card title="Login">
          {/* Form Errors */}
          {this.renderErrorMsgs()}

          <View style={styles.row}>
            {/* Email */}
            <View style={styles.row}>
              <FormLabel>Email</FormLabel>
              <FormInput
                autoCapitalize="none"
                autoCorrect={false}
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
                onChangeText={this.onPasswordChange.bind(this)}
              />
            </View>
          </View>

          <Divider/>

          {/* Buttons */}
          <View style={{flexDirection: 'row', paddingTop: 20}}>
            <View style={{width: '50%'}}>
              <Button
                title="Register"
                onPress={() => this.props.navigation.navigate('Register')}
                buttonStyle={{backgroundColor: '#03a9f4'}}
                containerViewStyle={{marginLeft: 0, marginRight: 5}}
              />
            </View>
            <View style={{width: '50%'}}>
              <Button
                title="Login"
                disabled={this.props.loading}
                onPress={this.onLoginPress.bind(this)}
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
  }
});

Login.propTypes = {
  navigation: PropTypes.object,
  emailChanged: PropTypes.func,
  passwordChanged: PropTypes.func,
  loginUser: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  loading: PropTypes.bool,
  errors: PropTypes.object,
};

const mapStateToProps = ({auth}) => {
  const {email, password, errors, loading} = auth;
  return {email, password, errors, loading};
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(Login)