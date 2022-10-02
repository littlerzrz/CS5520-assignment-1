import { View, Button } from 'react-native'
import React from 'react'

export default function Buttons({ confirmInputHandler, resetInputHandler }) {
  return (
    <View style={style}>
      <Button color="#BCAB79" title="Confirm" onPress={confirmInputHandler} />
      <Button color="#D03434" title="Reset" onPress={resetInputHandler} />
    </View>
  );
}

const style = {
  flex: 1,
  flexDirection: "row-reverse",
  justifyContent: "space-around",
  marginTop: 140,
};