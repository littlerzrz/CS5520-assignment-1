import { View } from 'react-native'
import React from 'react'

export default function Card({children, width, height, marginTop}) {
    const style = {
      marginTop: marginTop|| 40,
      backgroundColor: "#2B4D4F",
      width: width || 350,
      height,
      borderRadius: 20,
      shadowOffset: { width: 15, height: 15 },
      shadowOpacity: 0.15,
      shadowRadius: 8,
      shadowColor: "#253031",
    };
  return (
    <View style={style}>
      {children}
    </View>
  )
}

