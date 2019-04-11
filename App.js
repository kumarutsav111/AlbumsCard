/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, ScrollView, Linking } from 'react-native';
import axios from 'axios';
import Card from './components/Card'
import Button from './components/Button'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      responseData: []
    }
  }
  componentDidMount() {
    var axios = require('axios');

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({ responseData: response.data })
      })
      .catch(error => {
        console.error(error);

      })

    // axios.all([
    //   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-08-03'),
    //   axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-08-02')
    // ]).then(axios.spread((response1, response2) => {
    //   console.log(response1.data.url);
    //   console.log(response2.data.url);
    //   this.setState({
    //     responseData: response1.data
    //   })
    // })).catch(error => {
    //   console.log(error);
    // });
    // fetch('https://jsonplaceholder.typicode.com/posts/1', {
    //   method: 'GET'
    // })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //   this.setState({
    //     data: responseJson
    //   })
    // })
    // .catch((error) => {
    //   console.error(error);      
    // })
    //     const axios = require('axios');
    // axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    //   .then(response => {
    //     console.log(response.data.url);
    //     console.log(response.data.explanation);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
  lapsList() {
    return this.state.responseData.map(albums => {
      const { title, artist, image, thumbnail_image , url} = albums;
      const { thumbnailStyle,
        headerContent,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
      } = styles;
      return (
        <Card>
          <View>
            <View style={thumbnailContainerStyle}>
              <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
            </View>
            <View style={headerContent} >
              <Text style={headerTextStyle}>{title}</Text>
              <Text>{artist}</Text>
            </View>
          </View>
          <View>
            <Image
              style={imageStyle}
              source={{ uri: image }}
            />
          </View>
          <Button onPress = {() => Linking.openURL(url)}>
            Buy Now!!!
          </Button>
        </Card >
      )
    })
  }
  render() {

    return (
      <ScrollView >
        {this.lapsList()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    width: 50,
    height: 50,
  },
  imageStyle: {
    height: 400,
    flex: 1,
    width: null
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
// state = {
//   data: ''
// }
// componentDidMount(){
//   fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'GET'
//   })
//   .then ((response) => response.json())
//   .then((responseJson) => {
//     this.setState({
//       data: responseJson
//     })
//   })
//   .catch((error) => {
//     console.error();      
//   });
