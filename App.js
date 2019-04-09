/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      responseData: []
    }
  }
  componentDidMount(){
    var axios = require('axios');

    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => {
      this.setState({responseData: response.data})
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
      return (
        <View><Text>{albums.title}</Text></View>
      )
    })
}
  render() {
    
    return (
      <View style={styles.container}>
        {this.lapsList()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
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
