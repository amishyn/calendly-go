import React from 'react';
import { Text, View, StyleSheet, Button, Share } from 'react-native';

export default class EventType extends React.Component {

  render() {
    return (
      <View style={styles.row} >
        <View>
          <Text style={styles.header}>
            {this.props.name}
          </Text>
          <Text>{this.props.url}</Text>
        </View>
        <Button
          onPress={ () => this.share(this.props.url) } title="Share"
        ></Button>
      </View>
    );
  }

  share(url) {
    Share.share({
      title: "Share",
      message: url
    },
    {
      url
    });
  }

}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    justifyContent: 'space-between'
  },
  header: {
    fontSize: 20, fontWeight: "500"
  },
});
