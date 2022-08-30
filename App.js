import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import STI from './screens/sti';
import EmbedHealth from './screens/checkHealth';

const tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>

    <tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Health') {
            iconName = focused
              ? 'account-check'
              : 'account-check-outline';
          } else if (route.name === 'STIs') {
            iconName = focused ? 'virus' : 'virus-outline';
          }

          // You can return any component that you like here!
          if(route.name === "Health"){
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;

          }
          else if(route.name === "STIs"){
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;

          }
         
        },
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'grey',
      })}
    >
        <tab.Screen name='STIs' component={STI}/>
        <tab.Screen name='Health' component={EmbedHealth}/>
    </tab.Navigator>

  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
