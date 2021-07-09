import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MainTabScreen from './scren/MainTabScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer >
    <Drawer.Navigator initialRouteName="Home">  
      <Drawer.Screen name="Home" component={MainTabScreen} />
      {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
    </Drawer.Navigator>
  </NavigationContainer>
    );
  }
}
