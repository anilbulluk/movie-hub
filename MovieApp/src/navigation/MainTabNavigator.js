import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator()

export default function MainTabNavigator(){
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home-outline';
          if (route.name === 'Ana Sayfa') iconName = focused ? 'home' : 'home-outline';
          else if (route.name === 'Ara') iconName = focused ? 'search' : 'search-outline';
          else if (route.name === 'Profil') iconName = focused ? 'person' : 'person-outline';
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0080ff',
        tabBarInactiveTintColor: '#888',
        headerShown: true,
      })}>
      <Tab.Screen name="Ana Sayfa" component={HomeScreen} options={{title:"Ana Sayfa"}} />
      <Tab.Screen name="Ara" component={SearchScreen} options={{title:"Film Ara"}} />
      <Tab.Screen name="Profil" component={ProfileScreen} options={{title:"Profil"}} />
    </Tab.Navigator>
)
}