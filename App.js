import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Tarea/HomeScreen';
import DetailScreen from './Tarea/DetailScreen';
import Menu from './Tarea/Menu';
import Box from './Tarea/Box';

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailScreen} options={{title: "Detalles"}}/>
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Box" component={Box}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
