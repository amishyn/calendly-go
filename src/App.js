import React from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import LoginView from './views/login-view';
import EventTypes from './views/event-types';
import { addToken, deleteToken, showError } from './actions';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor() {
    super();

    try {
      AsyncStorage.getItem('token').then((token) => {
        if (token !== null){
          this.props.dispatchAddToken(token);
        }
      });
    } catch (error) {
      // Error retrieving data
    }
  }
  render() {
    if (!this.props.token) {
      return (
        <View style={styles.container}>
          <LoginView></LoginView>
          <Text style={styles.errorMessage}>{this.props.errorMessage}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <Text>token: {this.props.token}</Text>
          <EventTypes></EventTypes>
          <Text style={styles.errorMessage}>{this.props.errorMessage}</Text>
        </View>
      );
    }
  }

  dispatchAddToken(token) {
    this.props.dispatchAddToken(token)
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  errorMessage: {
    color: 'red',
    flex: 1,
  }
});

function mapStateToProps (state) {
  return {
    token: state.auth.token,
    errorMessage: state.auth.errorMessage
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchAddToken: (token) => dispatch(addToken(token)),
    dispatchDeleteToken: () => dispatch(deleteToken()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)