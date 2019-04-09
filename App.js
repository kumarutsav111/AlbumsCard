/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import axios from 'axios'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n'
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      responseData: ''
    }
  }
  componentDidMount(){
    var axios = require('axios');

    axios.all([
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-08-03'),
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2017-08-02')
    ]).then(axios.spread((response1, response2) => {
      console.log(response1.data.url);
      console.log(response2.data.url);
      this.setState({
        responseData: response1.data
      })
    })).catch(error => {
      console.log(error);
    });
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
      return (
        <View><Text>{this.state.responseData.url}</Text></View>
      )
}
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        {this.lapsList()}
        {/* <Text style={styles.instructions}>{this.state.data.body}</Text> */}
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
