import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import TabNavigation from './TabNavigation';
//se importa cada clases donde se van a iniciar las pantallas

const Stack = createNativeStackNavigator();

//abajo se deben especificar las clases que se van a navegar
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}