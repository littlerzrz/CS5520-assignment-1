import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";

const MY_NUMBER = 1025;

export default function App() {
  const [inputNumber, setInputNumber] = useState("");
  const confirmInputHandler = () => {
    const num = parseInt(inputNumber);
    if (isNaN(num) || num > 1029 || num < 1020) {
      Alert.alert("Invalid Number", "Number must be between 1020 and 1029", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    let successMsg = "Congrats! You Won!";
    let display = num > MY_NUMBER ? "higher" : "lower";
    let failMsg = `You have chosen ${num} That's not my number! Guess ${display}`;
  };
  const resetInputHandler = () => setInputNumber("");

  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}> Guess My Number </Text>
      </View>
      <View style={styles.card}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.text}>Enter A Number</Text>
          <TextInput
            style={styles.input}
            value={inputNumber}
            onChangeText={(e) => setInputNumber(e)}
            keyboardType="numeric"
            maxLength={4}
          />
        </View>
        <View style={styles.buttons}>
          <Button
            color="#BCAB79"
            title="Confirm"
            onPress={confirmInputHandler}
          />
          <Button color="#D03434" title="Reset" onPress={resetInputHandler} />
        </View>
      </View>
      <View style={{ flex: 4 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  titleBox: {
    marginTop: 90,
    borderWidth: 2,
    width: 330,
    height: 70,
    flexDirection: "column",
    justifyContent: "center",
    borderColor: "#B1A172",
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    color: "#B1A172",
    textAlign: "center",
  },
  card: {
    flex: 3,
    marginTop: 40,
    backgroundColor: "#2B4D4F",
    width: 350,
    borderRadius: 20,
    shadowOffset: { width: 15, height: 15 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowColor: "#253031",
  },
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
  buttons: {
    flex: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-around",
    marginTop: 140,
  },
});
