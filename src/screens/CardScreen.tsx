import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const suits = ["♦", "♥", "♠", "♣"]; // Carreau, Cœur, Pique, Trèfle
const initialCards = [
  { id: "C0", value: 1, suit: 0 },
  { id: "C1", value: 2, suit: 0 },
  { id: "C2", value: 3, suit: 0 },
  { id: "C7", value: 4, suit: 0 },
  { id: "C3", value: 5, suit: 0 },
  { id: "C6", value: 6, suit: 0 },
  { id: "C5", value: 7, suit: 0 },
  { id: "C4", value: 8, suit: 0 },
];

const CardScreen = () => {
  const [cards, setCards] = useState(initialCards);

  // Changer la famille de la carte (rotation)
  const changeSuit = (id: string) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, suit: (card.suit + 1) % 4 } : card
      )
    );
  };

  // Augmenter les valeurs des cartes (sauf As -> devient 7)
  const increaseValues = () => {
    setCards((prevCards) =>
      prevCards.map((card) => ({
        ...card,
        value: card.value === 1 ? 7 : card.value + 1,
      }))
    );
  };

  // Récupération des données des cartes
  const getCardData = (id: string) => cards.find((c) => c.id === id);

  return (
    <View style={styles.container}>
      {/* Première ligne */}
      <View style={[styles.row, styles.rowTop]}>
        {["C0", "C1", "C2"].map((id) => (
          <TouchableOpacity key={id} style={styles.card} onPress={() => changeSuit(id)}>
            <Text style={styles.cardText}>
              {getCardData(id)?.value} {suits[getCardData(id)?.suit ?? 0]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Deuxième ligne */}
      <View style={[styles.row, styles.rowMiddle]}>
        <TouchableOpacity style={styles.card} onPress={() => changeSuit("C7")}>
          <Text style={styles.cardText}>
            {getCardData("C7")?.value} {suits[getCardData("C7")?.suit ?? 0]}
          </Text>
        </TouchableOpacity>

        {/* Cellule centrale */}
        <TouchableOpacity style={styles.card} onPress={increaseValues}>
          <Text style={styles.cardText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => changeSuit("C3")}>
          <Text style={styles.cardText}>
            {getCardData("C3")?.value} {suits[getCardData("C3")?.suit ?? 0]}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Troisième ligne */}
      <View style={[styles.row, styles.rowBottom]}>
        {["C6", "C5", "C4"].map((id) => (
          <TouchableOpacity key={id} style={styles.card} onPress={() => changeSuit(id)}>
            <Text style={styles.cardText}>
              {getCardData(id)?.value} {suits[getCardData(id)?.suit ?? 0]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  rowTop: {
    alignSelf: "flex-start",
  },
  rowMiddle: {
    alignSelf: "center",
  },
  rowBottom: {
    alignSelf: "flex-end",
  },
  card: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    margin: 5,
    backgroundColor: "white",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default CardScreen;
