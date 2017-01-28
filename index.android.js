/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
var moment = require('moment');
export default class hours extends Component {

  state = { arrivalTime: '', expectedDepartureTime: '' };

  onChangeArrivalTime(text) {
    console.log('Changing hours');
  }

  insertTimeNow() {
    const arrivalTime = moment().format('HH:mm');
    const expectedDepartureTime = moment().add(7.4, 'hours').format('HH:mm');
    this.setState({
      arrivalTime,
      expectedDepartureTime
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Hours
        </Text>
        <View style={{flex: 1, alignItems: 'center'}}>
        <Text>Arrival time (HH:MM)</Text>
        <TextInput style={{height: 40, width: 58, borderWidth: 1, borderColor: 'gray'}}
          onChangeText={this.onChangeArrivalTime.bind(this)}
          placeholder="HH:MM"
          keyboardType="default"
          value={this.state.arrivalTime}
        />
      <TouchableOpacity style={{borderWidth: 1, marginTop: 5, borderColor: 'gray', padding: 5, backgroundColor: 'gray'}}
         onPress={this.insertTimeNow.bind(this)}>
        <Text style={{color: 'white'}}>Time now</Text>
      </TouchableOpacity>
    </View>

      <Text style={{flex: 1}}>You should be free to go at {this.state.expectedDepartureTime}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  header: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('hours', () => hours);
