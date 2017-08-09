import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import {Provider} from 'react-redux';

import configureStore from './configureStore';
const store = configureStore();

export class CalendlyGoApp extends React.Component {
  render() {
    return (
      <Provider key="provider" store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('CalendlyGo', () => CalendlyGoApp);