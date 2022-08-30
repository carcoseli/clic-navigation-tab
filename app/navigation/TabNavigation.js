import * as React from "react";
import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/Main/HomeScreen";
import SettingsScreen from "../screens/Main/SettingsScreen";
import SearchScreen from "../screens/Main/SearchScreen";
import HealthScreen from "../screens/Main/HealthScreen";
import ShoppingScreen from "../screens/Main/ShoppingScreen";
import UserProfileScreen from "../screens/Main/UserProfileScreen";
import AddScreen from "../screens/Main/AddScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = focused ? 'laptop': 'laptop-outline';
              break;
            case "Add":
              iconName = focused ? 'add' : 'add-outline';
              break;
            case "Search":
              iconName = focused ? 'search' : 'search-outline';
              break;
            case "Profile":
              iconName = focused ? 'person' : 'person-outline';
              break;
            case "Health":
              iconName = focused ? 'heart' : 'heart-outline';
              break;
            case "Shopping":
              iconName = focused ? 'cart' : 'cart-outline';
              break;

            default:
              break;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#02CCFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Health" component={HealthScreen} />
      <Tab.Screen name="Shopping" component={ShoppingScreen} />
      <Tab.Screen name="Add" component={AddScreen} />
      <Tab.Screen name="Profile" component={UserProfileScreen} />
    </Tab.Navigator>
  );
}
