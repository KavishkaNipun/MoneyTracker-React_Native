import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, ButtonGroup, NativeBaseProvider  } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class ScreenTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <NativeBaseProvider>
        <Text>Screen Two</Text>
        <Button onPress={() =>{ 
            this.props.navigation.navigate('ScreenOne')
        }}
        >
            Load Screen One</Button>
            {/* <Image source={require('assets\\img\\LOGO.png')} /> */}
      </NativeBaseProvider>

      
    );
  }
}
