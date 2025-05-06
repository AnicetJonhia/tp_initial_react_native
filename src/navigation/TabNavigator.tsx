import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccueilScreen from '../screens/AccueilScreen';
import StackNavigator from './StackNavigator'; // Utilisation du Stack
import { Ionicons } from '@expo/vector-icons';
import CardScreen from "../screens/CardScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Accueil"
                component={AccueilScreen}
                options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }}
            />
            <Tab.Screen
                name="Produits"
                component={StackNavigator}  // ✅ Utilisation du StackNavigator
                options={{ tabBarIcon: ({ color, size }) => <Ionicons name="cart" size={size} color={color} /> }}
            />
            <Tab.Screen
                name="Carte"
                component={CardScreen}
                options={{ tabBarIcon: ({ color, size }) => <Ionicons name="card" size={size} color={color} /> }}
                />
        </Tab.Navigator>
    );
};

export default TabNavigator;
