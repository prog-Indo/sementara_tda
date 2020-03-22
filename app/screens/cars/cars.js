import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions
  } from 'react-native';
import TopMenu from '../component/topmenu';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import New from './new';
  
const Tab = createMaterialTopTabNavigator();
class Cars extends Component {
  renderCars = () => (
    <View style={{flex:1}}>
          <Tab.Navigator
            tabBarOptions={{
              labelStyle: { fontSize: 12},
              style: { backgroundColor: 'black',borderWidth:1,borderTopColor:'white',borderBottomColor:'white' },
              activeTintColor: 'white',
              indicatorStyle:{backgroundColor:'white'}
            }}
          >
            <Tab.Screen name="New" component={New} />
            <Tab.Screen name="Used" component={New} />
            <Tab.Screen name="Other" component={New} />
            <Tab.Screen name="Sell" component={New} />
            <Tab.Screen name="Wheel" component={New} />
          </Tab.Navigator>
          </View>
  )
  render () {
    return (
      <View style={{flex:1}}>
        <TopMenu/>
        {this.renderCars()}
      </View>
    );
  }
}
export default Cars
