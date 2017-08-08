import React from 'react';
import { Text, View, ListView, StyleSheet, ActivityIndicator, Button, Share } from 'react-native';
import EventType from './event-type';

export default class EventTypes extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.loadData();
  }

  renderRow(rowData) {
    return (
      <EventType
        name={rowData.attributes.name}
        url={rowData.attributes.url}
      ></EventType>
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

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator style={{flex: 1}}/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'flex-end'}}>
          <Button
            title="Logout"
            onPress={this.onPressLogout.bind(this)}
          />
        </View>
        <Text style={styles.header}>EventTypes</Text>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
      </View>
    );
  }

  onPressLogout() {
    this.props.handler({token: null, errorMessage: null});
  }

  loadData() {
    return fetch('https://calendly.com/api/v1/users/me/event_types', {
      headers: {
        'X-TOKEN': this.props.token
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      if (responseJson.data) {
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.data),
        }, function() {
          // do something with new state
        });
      } else {
        this.props.handler({token: null, errorMessage: "Can't load data"});
      }
    })
    .catch((error) => {
      console.log(error);
      this.props.handler({token: null});
      console.error(error);
    });
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    fontWeight: "700",
    padding: 12
  },
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  }
});
