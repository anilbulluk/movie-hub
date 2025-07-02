import React from 'react'
import { NavigationContainer }
from '@react-navigation/native'
import { createNativeStackNavigator }
from '@react-navigation/native-stack'
import MainTabNavigator from './MainTabNavigator'
import MovieDetailScreen from '../screens/MovieDetailScreen'

const Stack=createNativeStackNavigator()
export default function AppStack(){
 return(
  <NavigationContainer>
  <Stack.Navigator>
   <Stack.Screen
    name="MainTabs"
    component={MainTabNavigator}
    options={ {headerShown:false}}/>
   <Stack.Screen
    name="MovieDetail"
     component={MovieDetailScreen}
    options={{title:'Film Detayı'}}
   />
  </Stack.Navigator>
 </NavigationContainer>
 )}