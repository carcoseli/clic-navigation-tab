import React, { useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import TabNavigation from './TabNavigation';
import { onAuthStateChanged } from 'firebase/auth';
import { autentication } from '../config/firebase';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [isSesion, setisSesion] = useState(false);
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(autentication, (user) => {
      if (user) {
        const uid = user.uid;
        setisSesion(true)
      } else {
        setisSesion(false);

      }
    })
    return () => {
      unsuscribe();
    }

  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          !isSesion ? (
            //si es dos pantallas si coloca los tabs
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </>
          ) : (
            //si es una pantalla no se coloca los tab
            <Stack.Screen name="Main" component={TabNavigation} />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}