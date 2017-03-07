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
    height: 70,
    backgroundColor: '#472f4c',
    alignSelf: 'stretch',
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
  },

  itemWrap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  itemWrap0: {    
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
    fontSize: 12,
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
    fontSize: 16,
  },

  itemIcon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  itemIcon0: {
    width: 55,
    height: 55
  },
  itemIcon1: {
    width: 50,
    height: 50
  },
  itemIcon2: {
    width: 40,
    height: 40
  },
  itemIcon3: {
    width: 35,
    height: 35
  }
});

/**/

//const Row = (props) => (
export default class Row extends Component {

  constructor(props) {
    super(props);
  }

  getItemGradient(rowID) {
    var itemGradients = {
        itemBase: ['#00000040', '#00000010', '#00000000', '#00000000'],
      };

    return itemGradients.itemBase;
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
          <View style={[styles.itemWrap, styles['itemWrap' + this.props.rowID]]}>
            <View style={{width:60}}>
              <Image source={require('./img/payCheck.png')} style={[styles.itemIcon, styles['itemIcon' + this.props.rowID]]} />
            </View>
            <View style={{paddingLeft: 20}}>
              <Text style={[styles.itemTitle, styles['itemTitle' + this.props.rowID]]}>{this.props.data.registered}</Text>
            </View>
          </View>
        </LinearGradient>
      </TouchableHighlight>
    );
  }
}