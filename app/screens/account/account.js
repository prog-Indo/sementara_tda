import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView
  } from 'react-native';

import EIcon from "react-native-vector-icons/Entypo";
import ADIcon from "react-native-vector-icons/AntDesign";

class Account extends Component {
  
  render(){ 
    return (
        <ScrollView>
          <View>
            <View style={styles.view}>
              <View style={styles.top} >
                <Text style={styles.login}>LOGIN</Text>
                <TextInput style={styles.textiput} placeholder="Type your email ..."  />
                <TextInput style={styles.textiput} placeholder = "Type your password ..."/>
                <TouchableOpacity style={styles.forgot}>
                  <Text style={styles.forgotText}>forgot password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginbutton}>
                  <Text style={styles.logintext} >LOGIN</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.linetextview}>
                <View style={styles.linetext} />
                  <Text style={styles.textline}>Or continue with ...</Text>
                <View style={styles.linetext} />
              </View>
              <View style={styles.top} >
                <TouchableOpacity style={styles.fbbutton}>
                  <View style={{marginLeft:-60}}>
                  <EIcon name="facebook-with-circle" color="blue" size={40}/>
                  </View>
                    <Text style={styles.fbtext} >Login with Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fbbutton}>
                  <View style={{marginLeft:-60, backgroundColor:'red',borderRadius:40, height:40, width:40, justifyContent:'center', alignItems:'center'}}>
                  <ADIcon name="google" color="white" size={30}/>
                  </View>
                    <Text style={styles.gtext} >Login with Facebook</Text>
                </TouchableOpacity>
              </View>
              <View style={{backgroundColor:'#D3D3D3',flex:1,borderRadius:10,height:180}}>
                <View style={styles.top}>
                    <Text style={{textAlign:'center',color:'grey'}}>Not a member yet?</Text>
                  <TouchableOpacity style={styles.regbutton}>
                    <Text style={styles.logintext} >LOGIN</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
    )
  }
} 

const styles = StyleSheet.create({
  view:{
    // backgroundColor:'blue', 
    flex:1
  },
  top: {
    // backgroundColor:'blue',
    paddingTop:17,
    paddingBottom:30,
    paddingHorizontal:35,
    
  },
  
  textiput:{ 
    height: 50, 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius:12,
    marginTop:17,
    paddingLeft:10
  },
  forgotText:{
    color:'grey',
    padding:5,
    textAlign:'right',
    fontSize:10,
    textDecorationLine:'underline'
  },
  
  loginbutton:{ 
    backgroundColor:'#202020', 
    height: 50, 
    marginTop: 10, 
    justifyContent:'center',
    borderRadius:12 
  },
  login: {
    textAlign:'center',
    fontSize:15,
    paddingBottom:10
    // padding:17
  },
  logintext:{
    color:'white', 
    textAlign:'center'
  },
  linetextview:{flexDirection: 'row'},
  linetext:{
    backgroundColor: 'grey', 
    height: 1, 
    flex: 1, 
    alignSelf: 'center'
  },
  textline:{
    alignSelf:'center',
    paddingHorizontal:5, 
    fontSize:12, 
    color:'grey' 
  },
  fbbutton:{ 
    backgroundColor:'#f5f5f5', 
    height: 50, 
    marginTop: 10, 
    justifyContent:'center',
    alignItems:'center',
    borderColor:'grey',
    borderRadius:25,
    borderWidth:1,
    flexDirection:'row'
  },
  fbtext:{ 
    color:'blue',
    textAlign:'center',
    marginLeft: 40,
    fontSize:15
  },
  gtext:{ 
    color:'red',
    textAlign:'center',
    marginLeft: 40,
    fontSize:15
  },
  regbutton:{ 
    backgroundColor:'#f5f5f5', 
    height: 50, 
    marginTop: 10, 
    justifyContent:'center',
    borderRadius:12 
  },
  logintext:{
    color:'grey', 
    textAlign:'center'
  },

});

  
export default Account;