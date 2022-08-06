import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Main/HomeScreen';
import SearchScreen from '../screens/Main/SearchScreen';
import FavouriteScreen from '../screens/Main/FavouriteScreen';
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
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search-outline';
                    }else if (route.name === 'Favourite') {
                        iconName = focused ? 'heart' : 'heart-circle-outline';
                    }else if (route.name === 'Store') {
                        iconName = focused ? 'cart' : 'cart-outline';
                    }else if (route.name === 'Add') {
                        iconName = focused ? 'add' : 'add-circle-outline';
                    }else if (route.name === 'User') {
                        iconName = focused ? 'person' : 'person-outline';
                    }


                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#02CCFF',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Favourite" component={FavouriteScreen} />
            <Tab.Screen name="Store" component={StoreScreen} />
            <Tab.Screen name="Add" component={AddScreen} />
            <Tab.Screen name="User" component={UserScreen} />
        </Tab.Navigator>

    )
}
