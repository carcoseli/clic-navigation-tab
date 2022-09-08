import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComputerScreen from '../screens/Main/ComputerScreen';
import AddcircleScreen from '../screens/Main/AddcircleScreen';
import GaleriScreen from '../screens/Main/GaleriScreen';
import PersonScreen from '../screens/Main/PersonScreen';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Quines Somos') {
                        iconName = focused ? 'laptop':'laptop-outline';
                    } else if (route.name === 'Imagenes') {
                        iconName = focused ? 'heart':'heart-outline';
                    }else if (route.name === 'Add-circle') {
                        iconName = focused ? 'add-circle':'add-circle-outline';
                    }else if (route.name === 'Contactame') {
                        iconName = focused ? 'person':'person-outline';
                    }
            

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Quines Somos" component={ComputerScreen} />
            <Tab.Screen name="Imagenes" component={GaleriScreen} />
            <Tab.Screen name="Add-circle" component={AddcircleScreen} />
            <Tab.Screen name="Contactame" component={PersonScreen} />
           
        </Tab.Navigator>

    )
        }