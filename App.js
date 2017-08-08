import React from 'react';
import { StyleSheet, View, Text, AsyncStorage } from 'react-native';
import LoginView from './src/login-view';
import EventTypes from './src/event-types';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};

    try {
      AsyncStorage.getItem('token').then((token) => {
        if (token !== null){
          this.setState({token});
        }
      });
    } catch (error) {
      // Error retrieving data
    }
  }
  render() {
    if (!this.state.token) {
      return (
        <View style={styles.container}>
          <LoginView handler={(params) => this.setState(params)}></LoginView>
          <Text style={styles.errorMessage}>{this.state.errorMessage}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <EventTypes token={this.state.token} handler={(params) => this.setState(params)}></EventTypes>
        </View>
      );
    }
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
  }
});
