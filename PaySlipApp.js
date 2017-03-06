
import React, { Component } from 'react';
import { Navigator, BackAndroid, Platform, StyleSheet, Text, View } from 'react-native';

import PaySlipsListScreen from './PaySlipsListScreen';
import PaySlipScreen from './PaySlipScreen';

let _navigator;
let androidBacklistener = null;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    height: 60,
    backgroundColor: '#52c9e2',
  },
  toolbarTitle: {
    color: '#fff',
    fontSize: 15,
  },
  toolbarName: {
    color: '#fff',
    fontSize: 13,
  },
});

const navigationBarRouteMapper = {
   LeftButton: (route, navigator, index, navState) =>
    { return (
        <View style={{flex:1, padding: 10 }}>
          <Text style={styles.toolbarTitle}>Mobiiliverkkopalkka</Text>
          <Text style={styles.toolbarName}>Marko Pyrstöniemi</Text>
        </View>
      );
    },
    //{ return null; },
   RightButton: (route, navigator, index, navState) =>     
     { return null; },
   Title: (route, navigator, index, navState) =>
     { return null; },
}

export default class PaySlipApp extends Component {

  goBack() {
    _navigator.pop();
  }

  constructor() {
    super();

    if (Platform.OS === 'android' && androidBacklistener === null) {
      androidBacklistener = BackAndroid.addEventListener('hardwareBackPress', () => {
        this.goBack();
      });
    }
  }

  renderScene(route, navigationOperations, onComponentRef) {
    
    _navigator = navigationOperations;

    if (route.name === 'payslipslistscreen') {
      return (
        <PaySlipsListScreen navigator={navigationOperations} hideNavBar={true}  />
      );
    } else if (route.name === 'payslipscreen') {
      return (
        <PaySlipScreen 
          navigator={navigationOperations}
          
          onBack={() =>
              _navigator.pop()
            }

          data={route.data} />
      );
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'payslipslistscreen'}}
        renderScene={this.renderScene}
        navigationBar={
         <Navigator.NavigationBar
           routeMapper={navigationBarRouteMapper}
           style={styles.navBar}
         />
        }
      />
    )
  }
}
