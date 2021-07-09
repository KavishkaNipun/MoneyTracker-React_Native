import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './scren/MainTabScreen';
import { DrawerContent } from './scren/DrawerContent';
import RootStackScreen from './scren/RootStackScreen';

const Drawer = createDrawerNavigator();

const App = () => {
    return (
      <NavigationContainer >
        <RootStackScreen/>
    {/* <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} />}>  
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
    </Drawer.Navigator> */}
  </NavigationContainer>
    );
  }

  export default  App;