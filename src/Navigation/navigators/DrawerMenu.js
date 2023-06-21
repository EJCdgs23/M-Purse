import React, {useState} from 'react';
import { View, Text, Settings } from 'react-native';
import { useTheme } from 'styled-components/native';
import Animated from 'react-native-reanimated';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
}from 'react-navigation/drawer'

import { McText, McImsge} from 'Componets'
import { Image } from 'Constants'
import {Home, Profile, Accounts, Transactions, Stats, Settings, Help} from 'Screens'
import { useState } from 'react/cjs/react.production.min'
import { Accounts, Profile } from '../../Screens';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MENUs = [
    {
      name: 'Home',
      label: 'Home'

    },

    {
      name: 'Profile',
      label: 'Profile'

    },
    {
      name: 'Accounts',
      label: 'Accounts'

    },
    {
      name: 'Transactions',
      label: 'Transactions'

    },
    {
      name: 'Settings',
      label: 'Setttings'

    },
    {
      name: 'Help',
      label: 'Help'

    },
    {
      name: 'Home',
      label: "Home"

    },

]

const Drawer = createDrawerNavigator();
const CustomDrawercontent = ({navigation, theme}) => {
  console [activeIndex, setActiveIndex]= useState(0);
  return 
    <View
    style={{flex: 1}}
    >
      {/* Header*/}
      <View style={{
        width: 210,
        height: 107,
        borderBottomEndRadius: 107/2,
        backgroundColor: theme.colors.background,
        justifyContent:'center',
        alignItems: 'center'
      }}>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          width: 44,
          height: 44,
          borderRadius: 22,
          backgroundColor: theme.colors.boxBackground,
          marginRight: 10,
        }}>
          <McImsge source = {Image.avatar2}/>
        </View>
        <View>
          <McText semi size={16} color={theme.colors.text1}>Adrian V.</McText>
          <McText medium size={10}color={theme.colors.text1}>Baguio, Philippines</McText>
        </View>
      </View>

    </View>

    {/*DrawerItems*/}
        <DrawerContentScrollView
          scrolledEnabled={false}
          contentContainerStyle={{}}
          style={{marginLeft: -18}}

        >
          {MENUs?.map((menu, index)=> {
            return(
              <DrawerItem
              activeTintColor = {theme.color.boxBackground}
                focused = {activeIndex === index}
                key={index}
                onPress={()=>{
                  navigation.navigate(menu.name)
                  setActivationIndex(index)
                  
                }}
                label={({focused})=>{
                  return (
                      <View Style={{
                        flexDirection: 'row',
                        justifyContent: 'flex-start',
                        alignItems: 'center'
                      }}>
                          <View style={{
                            width: 4,
                            height: 33,
                            marginRight: 26,
                            backgroundColor: focused? theme.colors.primary: 'transparent'
                          }}>

                          </View>

                        <McText size={16} bold={focused} 
                        color={theme.colors.text1}
                        > 
                        {menu.label}
                        
                        </McText>
                      </View>
                  )
                }}

                >
              </DrawerItem>

            )
          })}
        </DrawerContentScrollView>
    {/*Footer*/}
    <View style={{marginBottom:27, marginLeft:30 }}>
      <TouchableOpacity 
      onpress = {()=>{
        navigation.closeDrawer();
        navigation.navigate('SignIn');
      }}
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
      >
        <McImage source={Images.logout}
         style={{
          tintColor: theme.colors.text2, 
          marginRight: 8,
          }}
          />
        <McText bold size={16} color={theme.colors.text2}> 
        Logout
        </McText>
    </TouchableOpacity>
    <View style={{marginTop: 62}}>
      <McText medium size={10} color={theme.colors.text2}>Version</McText>
    </View>
    </View>
    </View>;
  
};

const DrawerMenu = () => {
  const [progross, setProgress] = UseState( new Animated.Value(0))
  const theme = useTheme();

  const scale = Animated.interpolateNode(progross, {
    inputRange: [0, 1],
    outputRange: [1, 0.50]
  })

  const rotate = Animated.interpolateNode(progross, {
    inputRange: [0, 1],
    outputRange: ['0deg', '-10deg']
  })

  const borderRadius = Animated.interpolateNode(progross, {
    inputRange: [0, 1],
    outputRange: [1, 30]
  })

  const animatedStyle = {
      borderRadius, transform: [{scale, rotateZ: rotate}]
  }

  return (
    <View 
    style={{
        flex : 1,
        backgroundColor: theme.colors.boxBackground
    }}>
      <Drawer.Navigator
      hideStatusBar={true}
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
            flex: 1,
            width: '60',
            backgroundColor: 'transparent'    
        }}
            scenceContainersStyle={{
                backgroundColor: 'transparent'
        }}
        initialRouteName="Home"
        drawerContent={(props) =>{
          setTimeout(()=>{
            setProgress(props.progess)
            
          }, 0)
          return(
            <CustomDrawercontent
            navigation={props.navigation}
            theme={theme}
            />
          )
        }}
        >
        <Drawer.Screen name="Home">
        {(props) => <Home {...props} animatedStyle={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="Profile">
        {(props) => <Profile   {...props} animatedStyle={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="Accounts">
        {(props) => <Accounts  {...props} animatedStyle={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="Transactions">
        {(props) => <Transactions  {...props} animatedStyle={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="Settings">
        {(props) => <Settings {...props} animatedStyle={animatedStyle} />}
        </Drawer.Screen>
        <Drawer.Screen name="Help">
        {(props) => <Help {...props} animatedStyle={animatedStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  )
}

export default DrawerMenu