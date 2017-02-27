import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({  
  item: {
    flex: 1,
    height: 50,
    backgroundColor: '#472f4c',
    alignSelf: 'stretch',
    padding: 10,
  },
  item0: {
    backgroundColor: '#45aad4',    
    height: 120,
  },
  item1: {
    backgroundColor: '#3a76a7',
    height: 100,
  },
  item2: {
    backgroundColor: '#5b5588',
    height: 80,
  },
  item3: {
    backgroundColor: '#554365',
    height: 60,
  },
  itemText: {
    color: '#ffffff',
    fontSize: 10,
  },
  itemText0: {
    fontSize: 16,
  },
  itemText1: {
    fontSize: 14,
  },
  itemText2: {
    fontSize: 12,
  },
  itemText3: {
    fontSize: 11,
  },
  itemTitle: {
    fontSize: 12,
    color: '#ffffff',
  },
  itemTitle0: {
    fontSize: 24,
  },
  itemTitle1: {
    fontSize: 20,
  },
  itemTitle2: {
    fontSize: 16,
  },
  itemTitle3: {
    fontSize: 14,
  },
});

/**/

//const Row = (props) => (
export default class Row extends Component {

  constructor(props) {
    super(props);
  }

  getItemGradient(rowID) {
    var itemGradients = {
        item0: ['#378db1', '#45aad4', '#45aad4'],
        item1: ['#2e618b', '#3a76a7', '#3a76a7'],
        item2: ['#4a436f', '#5b5588', '#5b5588'],
        item3: ['#463754', '#554365', '#554365'],
        itemBase: ['#3a253f', '#472f4c', '#472f4c'],
      };

    if (rowID < 4) {
      return  itemGradients['item' + rowID];
    } else {
      return itemGradients.itemBase;
    }
  }

  gotoPayslipScreen() {
    this.props.navigator.push({
      name: 'payslipscreen',
      data: this.props.data
    });
  }

  render() {
    return (
      <TouchableHighlight onPress={this.gotoPayslipScreen.bind(this)}>
        <LinearGradient colors={this.getItemGradient(this.props.rowID)} style={[styles.item, styles['item' + this.props.rowID]]}>
          
            <View>
              <Text style={[styles.itemTitle, styles['itemTitle' + this.props.rowID]]}>{this.props.data.registered}</Text>
            </View>
        </LinearGradient>
      </TouchableHighlight>
    );
  }
}