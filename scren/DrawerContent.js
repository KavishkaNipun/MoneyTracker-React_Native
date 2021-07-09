import  React from 'react';
import {View, StyleSheet} from 'react-native';
import{
    Avatar,
    Title,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
    Caption
} from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props){

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () =>{
        setIsDarkTheme(!isDarkTheme);
    }

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.bottomDrawerSection}>
                    <View style={styles.userInfoSection}></View>
                       <View style={{flexDirection:'row', marginTop:15}}>
                       <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                           />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>kavishka Nipun</Title>
                                <Caption style={styles.caption}>@kavishka</Caption>
                            </View>
                       </View>
                       <View style={styles.row}>
                       <View style={styles.section}>
                       <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Followers</Caption>
                            </View>

                       </View>
                </View>
                <Drawer.Section style={styles.drawerSection}>
                <DrawerItem
                icon={({color,size}) => (
                    <Icon 
                    name="home-outline"
                    color={color}
                    size={size}
                    />
                )}
                label="Home"
                onPress={() => {props.navigation.navigate('Home')}}
                
                />

                <DrawerItem
                icon={({color, size}) => (
                    <Icon 
                    name="account-outline" 
                    color={color}
                    size={size}
                    />
                )}
                label="Profile"
                onPress={() => {props.navigation.navigate('Profile')}}
                />
                </Drawer.Section>

                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={()=>{toggleTheme()} }>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                          <View pointerEvents="none">
                          <Switch />
                          </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
                icon={({color,size}) => (
                    <Icon 
                    name="home-outline"
                    color={color}
                    size={size}
                    />
                )}
                label="Sign Out"
                onPress={() => {props.navigation.navigate('Home')}}
                
                />
            </Drawer.Section>

        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });