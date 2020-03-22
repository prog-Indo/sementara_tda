import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  } from 'react-native';
import RootNavigator from './routes';

class App extends Component {
  
  render(){ 
    return (
      <RootNavigator/>
    )
  }
  
}



export default App;