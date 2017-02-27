/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ToolbarAndroid
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#52c9e2',
  },
  itemsListTitle: {
    color: '#ffffff',
    fontSize: 20,
    margin: 10,
  },
  toolbar: {
    height: 56,
    backgroundColor: '#4883da',
  },
});

export default class PaySlipScreen extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (       
        <View style={styles.container}>
          <ToolbarAndroid
            title={this.props.data.name.first}
            style={styles.toolbar}
            titleColor='white'
            navIcon={require('./img/ic_arrow_back_white_24dp.png')}
            onIconClicked={() => this.props.navigator.pop()}
          />
          <Text style={styles.itemsListTitle}>{this.props.data.name.first}</Text>

          <TouchableHighlight onPress={this.props.onBack}>
            <Text>Tap me to go back</Text>
          </TouchableHighlight>
        </View>
    );
  };
}