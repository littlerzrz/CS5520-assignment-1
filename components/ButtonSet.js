import { View, Button } from "react-native";
import React from "react";
import { colors } from "../my_assets/constants";

export default function ButtonSet(props) {
  const { confirmHandler, resetHandler, marginTop, flexDirection } = props;
  const { confirmTitle, resetTitle } = props;

  const style = {
    flex: 1,
    flexDirection: flexDirection || "row-reverse",
    justifyContent: "space-around",
    marginTop: marginTop || 40,
    marginBottom: 20,
  };

  return (
    <View style={style}>
      <Button
        color={colors.darkRed}
        title={confirmTitle || "Confirm"}
        onPress={confirmHandler}
      />
      <Button
        color={colors.gold}
        title={resetTitle || "Reset"}
        onPress={resetHandler}
      />
    </View>
  );
}
