import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  FlatList,
  Dimensions,
  SafeAreaView
} from 'react-native';
import CarouselSlider from '../component/carouselslider';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


class New extends Component {
  state = {
    data: [
      {
        id:1,
        title:'TDA luxury toy',
        url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=N0IWMHT2'
      },
      {
        id:2,
        title:'TDA luxury toy',
        url: 'https://www.motoris.id/wp-content/uploads/2019/11/Bugatti-Chiron-Super-Sport-300-dijual-dengan-harga-Rp-54-miliar-dok.Carscoops-e1574082870107.jpg'
      },
      {
        id:3,
        title:'TDA luxury toy',
        url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/honda-nsx_3.jpg'
      },
      {
        id:4,
        title:'TDA luxury toy',
        url: 'https://robbreportedit.files.wordpress.com/2016/04/01-ford-gt-front-three-quarter1.jpg'
      },
      {
        id:5,
        title:'TDA luxury toy',
        url: 'https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/lexus-lc.jpg?itok=ALZbg1L0'
      },
      {
        title:'TDA luxury toy',
        url: 'https://awsimages.detik.net.id/community/media/visual/2019/11/15/0a8fe2cc-55fe-4fd8-9ff2-89b31fe4a401.jpeg'
      },],
    width: Dimensions.get('window').width/2 - 20
  }
  render(){ 
    return (
      <ScrollView>
        <SafeAreaView style={{flex:1, paddingBottom: 55}}>
          <CarouselSlider data={this.state.data}/>
          <FlatList
            keyExtractor={(item) => item.id}
            numColumns={2}
            data={this.state.data}
            columnWrapperStyle={{justifyContent:'space-around',marginTop:7}}
            renderItem={({item, index, separators}) => (
              <TouchableOpacity
              onPress={() => console.warn('On Progress')}
              >
                  <View style={{backgroundColor:'#303030',borderRadius:10,marginBottom:10}}>
                    <Image source={{uri:item.url}} style={{height:170,width:this.state.width, borderTopLeftRadius:10,borderTopRightRadius:10}}/>
                    <Text style={{textAlign:'center',color:'white'}}>{item.title}</Text>
                  </View>
              </TouchableOpacity>
            )}
          />
        </SafeAreaView>
      </ScrollView>
    )
  }
}  
  
export default New;