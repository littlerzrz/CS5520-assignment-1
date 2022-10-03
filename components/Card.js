import { View } from "react-native";
import React from "react";
import { colors } from "../my_assets/constants";
export default function Card({ children, width, minHeight, marginTop }) {
  const style = {
    marginTop: marginTop || 40,
    backgroundColor: colors.darkGreen,
    width: width || 350,
    minHeight: minHeight || 140,
    borderRadius: 20,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 15,
    shadowColor: colors.darkGreen,
  };
  return <View style={style}>{children}</View>;
}
