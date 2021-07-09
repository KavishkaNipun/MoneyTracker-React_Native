import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper';
import { styles } from 'styled-system';

const ExploreScreen = () =>{
    return (
        <View style={styles.container}>
            <Text>ExploreScreen</Text>
            <Button
            title="Click Here"
            onPress={() => alert('Button Clicked!') }
            />
        </View>
    );
};

export default ExploreScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})