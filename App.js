import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { colors, gradients } from "./my_assets/constants";
import { StartScreen, FinalScreen, GameScreen } from "./screens";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [guess, setGuess] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [inputNumber, setInputNumber] = useState("");
  const generateNumber = () => Math.floor(Math.random() * 10 + 1020);
  const [myNumber, setMyNumber] = useState();
  
  useEffect(() => {
    const num = generateNumber();
    setMyNumber(num);
  }, []);

  
  const keepGuessing = () => {
    setIsGameOver(false);
    setModalVisible(false);
    setInputNumber("");
    setGuess();
  };

  const finishGame = () => {
    setIsGameOver(true);
    setModalVisible(false);
  };

  const restartGame = () => {
    keepGuessing();
    setHasWon(false);
    const num = generateNumber();
    setMyNumber(num);
  };

  const makeGuess = (num) => {
    setGuess(num);
    setHasWon(num == myNumber);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={isGameOver ? gradients.final.colors : gradients.start.colors}
        style={styles.background}
      >
        {isGameOver ? (
          <FinalScreen
            hasWon={hasWon}
            restartGame={restartGame}
            isGameOver={isGameOver}
            myNumber={myNumber}
          />
        ) : (
          <StartScreen
            makeGuess={makeGuess}
            inputNumber={inputNumber}
            setInputNumber={setInputNumber}
            isGameOver={isGameOver}
          />
        )}

        <GameScreen
          modalVisible={modalVisible}
          finishGame={finishGame}
          keepGuessing={keepGuessing}
          guess={guess}
          hasWon={hasWon}
          myNumber={myNumber}
        />
        <View style={{ flex: 4 }} />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  background: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
