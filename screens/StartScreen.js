import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { Card, Buttons } from "../components";
import { colors } from "../my_assets/constants";
import { Header } from "../components";

export default function StartScreen({
  makeGuess,
  inputNumber,
  setInputNumber,
  isGameOver,
}) {
  const confirmHandler = () => {
    const num = parseInt(inputNumber);
    if (isNaN(num) || num > 1029 || num < 1020) {
      Alert.alert("Invalid Number", "Number must be between 1020 and 1029", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    makeGuess(num);
  };
  const resetHandler = () => setInputNumber("");
  return (
    <>
      <Header isGameOver={isGameOver} />
      <Card minHeight={250}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.text}>Enter A Number</Text>
          <TextInput
            style={styles.input}
            value={inputNumber}
            onChangeText={setInputNumber}
            keyboardType="numeric"
            maxLength={4}
          />
        </View>
        <View style={{ flex: 1, marginTop: 35 }}>
          <Buttons
            confirmHandler={confirmHandler}
            resetHandler={resetHandler}
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
    marginTop: 35,
  },
  input: {
    borderBottomColor: colors.lightBlue,
    borderBottomWidth: 2,
    width: 110,
    color: colors.lightBlue,
    fontSize: 40,
    marginTop: 20,
    textAlign: "center",
  },
});
