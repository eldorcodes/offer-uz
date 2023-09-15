import { View, Text, Button, Alert } from 'react-native'
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import Signup from '../components/Signup';
import Home from '../components/Home';
import Login from '../components/Login';
import Password from '../components/Password';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Inbox(){
  return (
    <View>
      <Text>Inbox</Text>
    </View>
  )
}

function Post(){
  return (
    <View>
      <Text>Post</Text>
    </View>
  )
}

function MyListing(){
  return (
    <View>
      <Text>My Listing</Text>
    </View>
  )
}

function MyDrawer(){
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='MyOffer' component={Home} options={{
        headerTitle:'Home'
      }} />
    </Drawer.Navigator>
  )
}

function MyTab(){
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={MyDrawer} options={() => ({
        headerShown:false,
        tabBarIcon:({size,color}) => <MaterialCommunityIcons name="home-analytics" size={size} color={color} />
      })} />
      <Tab.Screen name='Inbox' component={Inbox} options={() => ({
        tabBarIcon:({size,color}) => <MaterialCommunityIcons name="chat-minus" size={size} color={color} />
      })} />
       <Tab.Screen name='Post' component={Post} options={() => ({
        tabBarIcon:({size,color}) => <Feather name="plus-square" size={size} color={color} />
      })} />
      <Tab.Screen name='MyListing' component={MyListing} options={() => ({
        tabBarIcon:({size,color}) => <MaterialCommunityIcons name="format-list-bulleted-square" size={size} color={color} />
      })} />
    </Tab.Navigator>
  )
}

export default function StackScreen() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Main' component={MyTab} options={{ headerShown:false }} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Password' component={Password} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}