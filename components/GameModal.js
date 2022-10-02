import { View, Text, Modal } from "react-native";
import React,{useState} from "react";

const MY_NUMBER = 1025;

export default function GameModal() {
  let successMsg = "Congrats! You Won!";
  let display = num > MY_NUMBER ? "higher" : "lower";
  let failMsg = `You have chosen ${num} That's not my number! Guess ${display}`;
  return (
    <View>
      <Text>GameModal</Text>
    </View>
  );
}
