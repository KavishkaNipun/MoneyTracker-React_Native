import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { Button, ButtonGroup, NativeBaseProvider  } from 'native-base';
import HomeScreen from './scren/HomeScreen';
import DetailsScreen from './scren/DetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon  from 'react-native-vector-icons/Ionicons';



const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) =>(
   <HomeStack.Navigator screenOptions={{
       headerStyle:{
        backgroundColor:'#009387',
      
      },
      headerTintColor:'#fff',
      headerTitleStyle: {
        fontWeight:'bold'
      }
  
   }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={()=> {navigation.
            openDrawer();}}></Icon.Button>
        )
      }} />
       </HomeStack.Navigator> 
  );

  const DetailsStackScreen = ({navigation}) =>(
    <DetailsStack.Navigator screenOptions={{
        headerStyle:{
         backgroundColor:'#009387',
       
       },
       headerTintColor:'#fff',
       headerTitleStyle: {
         fontWeight:'bold'
       }
   
    }}>
         <DetailsStack.Screen name="Details" component={DetailsScreen}  options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={()=> {navigation.
            openDrawer();}}></Icon.Button>
        )
      }} />
       </DetailsStack.Navigator> 
   )



export default class App extends Component {
  render() {
    return (
      <NavigationContainer >
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Details" component={DetailsStackScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
    );
  }
}
