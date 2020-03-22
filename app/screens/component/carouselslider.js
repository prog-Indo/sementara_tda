import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions
  } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

class CarouselSlider extends Component {
  
  state = {
    data : this.props.data,
    activeSlide:0,
    entries:0,
    width: Dimensions.get('window').width
  }
  
    _renderItem ({item, index}) {
      return <Image style={{ height: 200}} source={{uri: item.url}} />
  }

  get pagination () {
      const { data, activeSlide } = this.state;
      return (
        <View style={{marginTop:-35}} >
          <Pagination
            dotsLength={data.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: 'transparent',paddingVertical:15}}
            dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 8,
                backgroundColor: 'rgba(255, 255, 255, 0.92)'
            }}
            inactiveDotStyle={{
                // Define styles for inactive dots here
            }}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
        </View>
      );
  }

  render () {
      return (
          <View>
              <Carousel
                data={this.state.data}
                renderItem={this._renderItem}
                sliderWidth={this.state.width}
                itemWidth={this.state.width}
                onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              />
              { this.pagination }
          </View>
      );
  }
}  
  
export default CarouselSlider;