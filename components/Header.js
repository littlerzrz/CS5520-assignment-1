import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.titleBox}>
      <Text style={styles.title}> Guess My Number </Text>
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
    borderColor: "#B1A172",
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    color: "#B1A172",
    textAlign: "center",
  },
});
