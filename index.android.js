//import React from 'react';
import {AppRegistry, Platform} from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('reactAppDemo', () => App);

if(Platform.OS === 'web'){
  AppRegistry.runApplication('reactAppDemo', {
    rootTag: document.getElementById('root')
  })
}
