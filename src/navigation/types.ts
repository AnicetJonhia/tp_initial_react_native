import { RouteProp } from '@react-navigation/native';
import { Produit } from '../types';

export type RootStackParamList = {
    Accueil: undefined;
    Produits: undefined;
    DetailsProduit: { produit: Produit };
};

export type DetailsProduitScreenRouteProp = RouteProp<RootStackParamList, 'DetailsProduit'>;


