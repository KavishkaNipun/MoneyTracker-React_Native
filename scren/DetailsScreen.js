import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const DetailsScreen = () => {
    return (
      <View style = {styles.container}>
        <Text>Detail Screen</Text>
  
      </View>
    );
  };

export default  DetailsScreen;

const styles= StyleSheet.create({
    container:{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})
   