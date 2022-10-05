import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../my_assets/constants";

export default function Header({ isGameOver }) {
  return (
    <View style={styles.titleBox}>
      <Text style={styles.title}>
        {isGameOver ? "Game is over" : "Guess My Number"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    marginTop: 90,
    borderWidth: 2,
    width: 330,
    height: 70,
    flexDirection: "column",
    justifyContent: "center",
    borderColor: colors.gold,
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    color: colors.gold,
    textAlign: "center",
  },
});
