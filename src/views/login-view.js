import React from 'react';
import { Text, TextInput, View, StyleSheet, AsyncStorage, Button, Image } from 'react-native';
import { addToken, deleteToken } from '../actions';
import { connect } from 'react-redux';


// state: { token: {value: '', valid: '', message: '' }}
class LoginView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../img/logo.png')}
        />
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
    this.props.dispatchAddToken(token);
    try {
      AsyncStorage.setItem('token', token);
    } catch (error) {
      // Error saving data
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 300
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10
  }
});


function mapStateToProps (state) {
  return {
    token: state.auth.token
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatchAddToken: (token) => dispatch(addToken(token)),
    dispatchDeleteToken: () => dispatch(deleteToken())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginView)