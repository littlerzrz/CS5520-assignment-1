import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import { Card, Buttons } from "./basics";

export default function NumberCard({makeGuess}) {
  const [inputNumber, setInputNumber] = useState("");
  const confirmInputHandler = () => {
    const num = parseInt(inputNumber);
    if (isNaN(num) || num > 1029 || num < 1020) {
      Alert.alert("Invalid Number", "Number must be between 1020 and 1029", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    makeGuess(num)
  };
  const resetInputHandler = () => setInputNumber("");
  return (
    <Card width={350} height={300}>
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
      <Buttons
        confirmInputHandler={confirmInputHandler}
        resetInputHandler={resetInputHandler}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#8EB8CC",
    fontSize: 30,
    marginTop: 40,
  },
  input: {
    borderBottomColor: "#C5E3F7",
    borderBottomWidth: 2,
    height: 56,
    width: 110,
    color: "#C5E3F7",
    fontSize: 40,
    marginTop: 20,
    textAlign: "center",
  },
});
