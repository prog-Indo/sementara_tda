import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,TouchableOpacity
  } from 'react-native';

import FIcon from 'react-native-vector-icons/Feather';
import Logo from '../../assets/images/logo.png'
import {createStackNavigator} from '@react-navigation/stack';
import { Toolbar } from 'react-native-material-ui';

class TopMenu extends Component {
  render(){ 
    return (

        <Toolbar
          style={{ container: {backgroundColor: 'black',justifyContent:'center'}}}
          centerElement={<Image style={{height:80,marginLeft:20}} resizeMode='contain' source={require('../../assets/images/logo.png')} />}
          searchable={{
            autoFocus: true,
            placeholder: 'Search',
            onChangeText: (v) =>console.warn(v)
          }}
          onRightElementPress={ (label) => { console.warn(label) }}
        />
    )


    // const Stack = createStackNavigator()
    // return (
    //   <Stack.Navigator>
    //     <Stack.Screen
    //       name="TopMenu"
    //       component={this.props.component}
    //       options={{
    //         headerTitle:() => <Image style={{width: 60, height: 60}} source={Logo}/>,
    //         headerTitleAlign: 'center',
    //         headerStyle:{
    //           backgroundColor:'black',
    //           height:60,
    //         },
    //         headerRight:() => <TouchableOpacity onPress={()=>this.props.navigation.navigate('SearchBar')}><FIcon name='search' color='white' size={30}/></TouchableOpacity>,
    //         headerRightContainerStyle:{
    //           paddingRight:20
    //         }
    //       }}
          
    //     />
    //     <Stack.Screen
    //       name="SearchBar"
    //       component={AboutUs}
    //       options={{
    //        head
    //       }}
          
    //     />
    //   </Stack.Navigator>
    // );
  }
}  
  
export default TopMenu;