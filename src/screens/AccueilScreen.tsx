import React, { useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useNavigation } from '@react-navigation/native';

const AccueilScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [containerColor, setContainerColor] = useState<string>("white");


    return (
        <View style={[styles.container, {backgroundColor: containerColor}]}>
            <Text style={styles.title}>Bienvenue sur l'application de gestion des produits</Text>
            <Button title="Voir les produits" onPress={() => navigation.navigate('Produits')} />



            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>
                Couleur du conteneur : {containerColor}
            </Text>
            <Button title={"Rouge"} onPress={() => setContainerColor("red")} ></Button>
            <Button title={"Vert"} onPress={() => setContainerColor("green")}></Button>
            <Button title={"Bleu"} onPress={() => setContainerColor("blue")}></Button>




        </View>
    );
};


const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
});


export default AccueilScreen;
