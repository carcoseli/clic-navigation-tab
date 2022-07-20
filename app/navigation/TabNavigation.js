import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
}

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
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Perfil" component={PerfilScreen} />
            <Tab.Screen name="Buscar" component={BuscarScreen} />

        </Tab.Navigator>

    );
}

