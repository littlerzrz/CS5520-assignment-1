import { useState } from "react";
import { StyleSheet, View, } from "react-native";
import { colors, MY_NUMBER } from "./my_assets/constants";
import { StartScreen, FinalScreen, GameScreen } from "./screens";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [guess, setGuess] = useState();
  const [isGameOver, setIsGameOver] = useState(true);
  const [hasWon, setHasWon] = useState(true);
  const [inputNumber, setInputNumber] = useState("");

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
  };

  const makeGuess = (num) => {
    setGuess(num);
    setHasWon(num == MY_NUMBER);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {isGameOver ? (
        <FinalScreen
          hasWon={hasWon}
          restartGame={restartGame}
          isGameOver={isGameOver}
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
      />
      <View style={{ flex: 4 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
});
