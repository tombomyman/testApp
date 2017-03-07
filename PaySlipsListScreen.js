/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#52c9e2',
    marginTop: 60,
    paddingTop: 80,
  },
  itemsListTitle: {
    color: '#ffffff',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
  },
  itemsList: {
    flex: 1,
    backgroundColor: '#472f4c',
  },
});

var REQUEST_URL = 'https://randomuser.me/api/?results=30';

import Row from './Row';

export default class PaySlipsListScreen extends Component {

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          payslips: this.state.dataSource.cloneWithRows(responseData.results),
          loaded: true,
        });
      })
      .done();
  }

  constructor(props) {
    super(props);
    
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
      payslips: null,
    };

    this.fetchData();
  }

  render() {    
    if (!this.state.loaded) {
      return (
        <Text>Loading...</Text>
      );
    }

    return (       
        <View style={styles.container}>         
          <Text style={styles.itemsListTitle}>Viimeisimmät palkkakuittisi</Text>
          <ListView style={styles.itemsList}
            dataSource={this.state.payslips}
            renderRow={(data, sectionID, rowID) =>
              <Row data={data} rowID={rowID} navigator={this.props.navigator} />
            }
          />
        </View>
    );
  }
}