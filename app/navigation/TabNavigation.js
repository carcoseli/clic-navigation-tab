// este codigo fue creado de la pag: Reactnative Navigation -->Customizing the Appearance
//esta clase solo vincula las clases por iconos 
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; //enlace copiado de RN Customizing the appearance
import HomeScreen from '../screens/Main/HomeScreen'; //si vinculo a otras clases externas importo sino no
import SettingsScreen from '../screens/Main/SettingsScreen';
import BuscarScreen from '../screens/Main/BuscarScreen';
import PerfilScreen from '../screens/Main/PerfilScreen';


const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    //Ingresamos rout.name por cada submenu inferior

                    if (route.name === 'Products') { //operador terneario, nombre de Tab.Screen
                        iconName = focused 
                            ? 'basket' //icono de web:pintado
                            : 'basket-outline'; //else: OUTLINE-> no pintado
                    } else if (route.name === 'Customers') {
                        iconName = focused? 'man' : 'man-outline';
                    } else if (route.name === 'Suppliers') {
                        iconName = focused? 'business' : 'business-outline';
                    }else if (route.name === 'Contact US') {
                        iconName = focused? 'call': 'call-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'green',// icono menu seleccionado
                tabBarInactiveTintColor: 'gray', // icono menu no seleccionado
            })}
        >
            <Tab.Screen name="Products" component={HomeScreen} />
            <Tab.Screen name="Customers" component={SettingsScreen} options={{headerShown: true}}/>
            <Tab.Screen name="Suppliers" component={BuscarScreen} options={{headerShown: true}}/>
            <Tab.Screen name="Contact US" component={PerfilScreen} options={{headerShown: true}}/>
           

        </Tab.Navigator>

    );
}

