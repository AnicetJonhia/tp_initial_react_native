import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { Produit } from '../types';

// Données mockées
const produits: Produit[] = [
    { id: 1, nom: 'Produit A', description: 'Description du produit A', prix: 25, image: 'https://via.placeholder.com/150' },
    { id: 2, nom: 'Produit B', description: 'Description du produit B', prix: 30, image: 'https://via.placeholder.com/150' },
];

const ProduitsScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View style={styles.container}>
            <FlatList
                data={produits}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => navigation.navigate('DetailsProduit', { produit: item })}
                    >
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <Text style={styles.nom}>{item.nom}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10 },
    item: { flexDirection: 'row', padding: 10, borderBottomWidth: 1 },
    image: { width: 50, height: 50, marginRight: 10 },
    nom: { fontSize: 18, fontWeight: 'bold' },
});

export default ProduitsScreen;
