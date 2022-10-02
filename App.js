import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert } from "react-native";
import { Header, NumberCard } from "./components";

export default function App() {
  const [guess, makeGuess] = useState();
  return (
    <View style={styles.container}>
      <Header />
      <NumberCard makeGuess={makeGuess} />
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
});
