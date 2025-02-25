import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ProduitsScreen from '../screens/ProduitsScreen';

import DetailsProduitScreen from '../screens/DetailsProduitScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Produits"
                component={ProduitsScreen}
                options={{ title: 'Liste des Produits' }}
            />
            <Stack.Screen
                name="DetailsProduit"
                component={DetailsProduitScreen}
                options={{ title: 'Détails du Produit' }}
            />
        </Stack.Navigator>
    );
};

export default StackNavigator;
