import 'react-native-gesture-handler';
import React,{Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MCIcon from "react-native-vector-icons/MaterialCommunityIcons";
import ADIcon from "react-native-vector-icons/AntDesign";
import FAIcon from "react-native-vector-icons/FontAwesome";
import EIcon from "react-native-vector-icons/EvilIcons";

import Home from './screens/home/home';
import Cars from './screens/cars/cars';
import News from './screens/news/news';
import AboutUs from './screens/aboutus/aboutus';
import Account from './screens/account/account';
import SplashScreen from './screens/component/splashscreens';
import {CommonActions} from '@react-navigation/native'

const Tab = createBottomTabNavigator();
class AppTabs extends Component {
  state={
    userToken:true,
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({userToken:false})
      CommonActions.navigate({
        name: 'account',

      })
    },3000)
  }
  render() {
  if (this.state.userToken){
    return <SplashScreen/>
  }
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeBackgroundColor: '#202020',
        inactiveBackgroundColor: '#202020',
        activeTintColor: 'white',
        inactiveTintColor: '#aca393',
        style:{
          borderTopLeftRadius:10, 
          borderTopRightRadius:10,
          backgroundColor:"#202020",
          position:'absolute',
          padding:10,
       }
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MCIcon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen 
        name="Cars" 
        component={Cars} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <ADIcon name="car" color={color} size={size} />
          ),
        }}  
        />
       
      <Tab.Screen 
        name="News" 
        component={News}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FAIcon name="newspaper-o" color={color} size={size} />
            ),
          }}  
          
          />
      <Tab.Screen 
        name="About Us" 
        component={AboutUs} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <EIcon name="sc-tumblr" color={color} size={size} />
            ),
          }}  
          
          />
      <Tab.Screen 
        name="Account" 
        component={Account}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MCIcon name="account" color={color} size={size} />
          ),
        }}  
      />
    </Tab.Navigator>
  )
  }
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}