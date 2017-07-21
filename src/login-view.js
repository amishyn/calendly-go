import React from 'react';
import { Text, TextInput, View, StyleSheet, AsyncStorage, Button } from 'react-native';

export default class LoginView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>API Token</Text>
        <TextInput
          style={styles.textInput}
          returnKeyType='go'
          onSubmitEditing={(event) => this.tokenChanged(event.nativeEvent.text) }
        />
      </View>
    );
  }

  tokenChanged(token) {
    this.props.handler({token});
    try {
      AsyncStorage.setItem('token', token);
    } catch (error) {
      // Error saving data
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    padding: 8
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});