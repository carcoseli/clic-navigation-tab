import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComputerScreen from '../screens/Main/ComputerScreen';
import SearchScreen from '../screens/Main/SearchScreen';
import CartScreen from '../screens/Main/CartScreen';
import AddcircleScreen from '../screens/Main/AddcircleScreen';
import HeartScreen from '../screens/Main/HeartScreen';
import PersonScreen from '../screens/Main/PersonScreen';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Computer') {
                        iconName = focused ? 'laptop':'laptop-outline';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search':'search-outline';
                    } else if (route.name === 'Heart') {
                        iconName = focused ? 'heart':'heart-outline';
                    }else if (route.name === 'Cart') {
                        iconName = focused ? 'cart':'cart-outline';
                    }else if (route.name === 'Add-circle') {
                        iconName = focused ? 'add-circle':'add-circle-outline';
                    }else if (route.name === 'Person') {
                        iconName = focused ? 'person':'person-outline';
                    }
            

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Computer" component={ComputerScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Heart" component={HeartScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Add-circle" component={AddcircleScreen} />
            <Tab.Screen name="Person" component={PersonScreen} />
           
        </Tab.Navigator>

    )
        }