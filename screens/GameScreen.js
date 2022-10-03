import { View, Text, Modal, StyleSheet, Button } from "react-native";
import React from "react";
import { Card, ButtonSet } from "../components";
import { colors, MY_NUMBER, gradients } from "../my_assets/constants";
import { LinearGradient } from "expo-linear-gradient";

export default function GameScreen({
  modalVisible,
  finishGame,
  keepGuessing,
  guess,
  hasWon,
}) {
  const successMsg = "Congrats! You Won!";
  const failMsg = `You have chosen ${guess} \n That's not my number! \n Guess ${
    guess < MY_NUMBER ? "higher" : "lower"
  }!`;
  const ModalView = () => (
    <View style={{flex:1}}>
      <LinearGradient
        // Button Linear Gradient
        colors={gradients.game.colors}
        locations={gradients.game.locations}
        style={styles.background}
      >
        <Card minHeight={hasWon ? 140 : 350}>
          <View style={{ flex: 9, alignItems: "center" }}>
            <Text style={styles.text}>{hasWon ? successMsg : failMsg}</Text>
          </View>
          <View style={{ flex: 5, fontSize: 30 }}>
            {hasWon ? (
              <Button
                color={colors.darkRed}
                title="Thank you!"
                onPress={finishGame}
              ></Button>
            ) : (
              <ButtonSet
                flexDirection="column-reverse"
                confirmHandler={keepGuessing}
                resetHandler={finishGame}
                confirmTitle="Let me guess again!"
                resetTitle="I'm done!"
                marginTop={5}
              />
            )}
          </View>
        </Card>
      </LinearGradient>
    </View>
  );

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible}>
        <ModalView />
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },

  text: {
    fontSize: 30,
    color: colors.lightBlue,
    textAlign: "center",
    marginTop: 30,
  },
  background: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  },
});
