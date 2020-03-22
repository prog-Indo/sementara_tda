import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  } from 'react-native';
import TopMenu from '../component/topmenu';


class Home extends Component {
  
  render(){ 
    return (
      <View >
        <TopMenu/>
        <Text>This is Home</Text>
      </View>
    )
  }
}  
  
export default Home;