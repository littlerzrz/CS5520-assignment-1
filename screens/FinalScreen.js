import { View, Text, StyleSheet, Image, Button } from "react-native";
import React from "react";
import { Card, Header } from "../components";
import { MY_NUMBER, colors } from "../my_assets/constants";

export default function FinalScreen({ hasWon, restartGame, isGameOver }) {
  const source = hasWon
    ? { uri: `https://picsum.photos/id/${MY_NUMBER}/150/150` }
    : require("../my_assets/lose.gif");

  const finalImage = <Image source={source} style={styles.image} />;
  return (
    <>
      <Header isGameOver={isGameOver} />
      <Card minHeight={350}>
        <View style={{ flex: 6, alignItems: "center" }}>
          <Text style={styles.text}>Here's your picture</Text>
          {finalImage}
        </View>
        <View style={{ flex: 2, marginTop: 35 }}>
          <Button
            color={colors.darkRed}
            title="Start Again"
            onPress={restartGame}
          />
        </View>
      </Card>
    </>
  );
}
const styles = StyleSheet.create({
  text: {
    color: colors.darkBlue,
    fontSize: 30,
    marginTop: 25,
  },
  image: { width: 150, height: 150, marginTop: 20 },
});
