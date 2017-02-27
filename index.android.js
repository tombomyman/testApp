
import React, { Component } from 'react';
import { AppRegistry, Navigator, BackAndroid, Platform, ToastAndroid } from 'react-native';

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

class testApp extends Component {

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
        <PaySlipsListScreen navigator={navigationOperations} />
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
      />
    )
  }
}

AppRegistry.registerComponent('testApp', () => testApp);
