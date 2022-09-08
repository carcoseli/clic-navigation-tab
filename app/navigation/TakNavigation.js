import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Main/HomeScreen';

import StoreScreen from '../screens/Main/StoreScreen';
import AddScreen from '../screens/Main/AddScreen';
import UserScreen from '../screens/Main/UserScreen';


const Tab = createBottomTabNavigator();
export default function TakNavigation() {
    return (


        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused? 'laptop': 'laptop-outline';
                    } else if (route.name === 'Store') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }else if (route.name === 'Add') {
                        iconName = focused ? 'add' : 'add-circle-outline';
                    }else if (route.name === 'User') {
                        iconName = focused ? 'person' : 'person-outline';
                    }


                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#9932cc',
                tabBarInactiveTintColor: '#008000',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Store" component={StoreScreen} />
            <Tab.Screen name="Add" component={AddScreen} />
            <Tab.Screen name="User" component={UserScreen} />
        </Tab.Navigator>

    )
}
