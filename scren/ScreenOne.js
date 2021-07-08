import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, ButtonGroup, NativeBaseProvider  } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class ScreenOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <NativeBaseProvider>
        <Text>Screen One</Text>
        <Button onPress={() =>{
        this.props.navigation.navigate ('ScreenTwo')
        }}
        >
<Text>Load Screen Two</Text>
    </Button>
      </NativeBaseProvider>
    );
  }
}
