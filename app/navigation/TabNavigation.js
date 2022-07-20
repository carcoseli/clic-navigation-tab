import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Main/HomeScreen'; //si vinculo a otras clases externas importo sino no
import SettingsScreen from '../screens/Main/SettingsScreen';
import BuscarScreen from '../screens/Main/BuscarScreen';
import PerfilScreen from '../screens/Main/PerfilScreen';


import Login from '../screens/Login';

/*
//Si vinculo en la misma clase por medio de una funcion agrego lo siguiente sino importo 
function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Settings!</Text>
        </View>
    );
}

function PerfilScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Perfil USUARIO!</Text>
        </View>
    );
}

function BuscarScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Buscar!</Text>
        </View>
    );
}*/

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused //operador terneario if else iconos
                            ? 'home' //icono de web:pintado
                            : 'home-outline'; //else: OUTLINE-> no pintado
                    } else if (route.name === 'Settings') {
                        iconName = focused
                            ? 'settings'
                            : 'settings-outline';
                    } else if (route.name === 'Perfil') {
                        iconName = focused
                            ? 'person'
                            : 'person-outline';
                    } else if (route.name === 'Buscar') {
                        iconName = focused
                            ? 'search'
                            : 'search-outline';
                    }else if (route.name === 'Login') {
                        iconName = focused
                            ? 'flash'
                            : 'flash-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} options={{headerShown: true}}/>
            <Tab.Screen name="Buscar" component={BuscarScreen} options={{headerShown: true}}/>
            <Tab.Screen name="Perfil" component={PerfilScreen} options={{headerShown: true}}/>
           

        </Tab.Navigator>

    );
}

