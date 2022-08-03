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

function Search() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Search!</Text>
      </View>
    );
}

function Favorites() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites!</Text>
    </View>
  );
}

function Cart() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cart!</Text>
    </View>
  );
}

function Add() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add!</Text>
    </View>
  );
}

function UserProfile() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>UserProfile!</Text>
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
          iconName = focused ? 'laptop': 'laptop-outline';
        } else if (route.name === 'Search') {
          iconName = focused ? 'search' : 'search-outline';
        }else if (route.name === 'Favorites') {
          iconName = focused ? 'heart' : 'heart-outline';
        }else if (route.name === 'Cart') {
          iconName = focused ? 'cart' : 'cart-outline';
        }else if (route.name === 'Add') {
          iconName = focused ? 'add' : 'add-outline';
        }else if (route.name === 'UserProfile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'skyblue',
      tabBarInactiveTintColor: 'gray',
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="Cart" component={Cart} />
    <Tab.Screen name="Add" component={Add} />
    <Tab.Screen name="UserProfile" component={UserProfile} />
  </Tab.Navigator>
  );
}