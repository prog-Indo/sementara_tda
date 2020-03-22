import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions
  } from 'react-native';
import {CommonActions} from '@react-navigation/native'

class SplashScreen extends Component {
  state={
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height
  }

  componentDidMount() {
    setTimeout(()=>{
      CommonActions.navigate({
        name: 'account',

      })
    },3000)
  }

  render(){ 
    return (
      <View style={{flex:1,paddingHorizontal:0}}>
        <Image
          style={{height:this.state.height,width:this.state.width}}
          source={require("../../assets/images/splash.png")}
        />
      </View>
    )
  }
}  
  
export default SplashScreen;