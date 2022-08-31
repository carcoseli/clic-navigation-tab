import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import TabNavigation from './TabNavigation';
import { onAuthStateChanged } from "firebase/auth";
import { authentication } from "../config/firebase";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [isSession, setIsSession] = React.useState(false);
  React.useEffect(() => {
    const unsuscribe=onAuthStateChanged(authentication,(user)=>{
      if (user) {
        const uid=user.uid;
        setIsSession(true);
      } else {
        setIsSession(false);
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
          !isSession?(
            <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            </>
          ):(
            //Si es una pantala no se coloca los tags --REVISAR
            <>
            <Stack.Screen name="Main" component={TabNavigation} />
            <Stack.Screen name="Login" component={Login} />
            </>
            
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}