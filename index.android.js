
import React, { Component } from 'react';
import { AppRegistry, Platform } from 'react-native';

import PaySlipApp from './PaySlipApp';

class testApp extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <PaySlipApp />
    )
  }
}

AppRegistry.registerComponent('testApp', () => testApp);
