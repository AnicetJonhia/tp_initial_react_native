import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DetailsProduitScreenRouteProp } from '../navigation/types';

const DetailsProduitScreen = () => {
    const route = useRoute<DetailsProduitScreenRouteProp>();
    const { produit } = route.params;

    return (
        <View style={styles.container}>
            <Image source={{ uri: produit.image }} style={styles.image} />
            <Text style={styles.nom}>{produit.nom}</Text>
            <Text style={styles.description}>{produit.description}</Text>
            <Text style={styles.prix}>Prix: {produit.prix} €</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, alignItems: 'center' },
    image: { width: 200, height: 200, marginBottom: 20 },
    nom: { fontSize: 22, fontWeight: 'bold' },
    description: { fontSize: 16, textAlign: 'center', marginVertical: 10 },
    prix: { fontSize: 18, fontWeight: 'bold', color: 'green' },
});

export default DetailsProduitScreen;
