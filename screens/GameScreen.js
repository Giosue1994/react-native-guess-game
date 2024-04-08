import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minLimit = 1;
let maxLimit = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function higherHandler() {
    if (currentGuess > userNumber) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    minLimit = currentGuess + 1;
    const newRandomNumber = generateRandomBetween(
      minLimit,
      maxLimit,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  function lowerHandler() {
    if (currentGuess < userNumber) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    maxLimit = currentGuess;
    const newRandomNumber = generateRandomBetween(
      minLimit,
      maxLimit,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  }

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver]);

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <View style={styles.guessContainer}>
        <Text style={styles.guessNumber}>{currentGuess}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Higher or Lower?</Text>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton title="-" pressFn={lowerHandler} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton title="+" pressFn={higherHandler} />
          </View>
        </View>
      </View>

      <View>
        <Text>LOG</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  guessContainer: {
    borderWidth: 3,
    borderColor: Colors.accent500,
    borderRadius: 10,
    width: "80%",
    paddingVertical: 40,
    alignItems: "center",
    marginBottom: 60,
  },
  guessNumber: {
    fontSize: 35,
    color: Colors.accent500,
    textAlign: "center",
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary800,
    elevation: 4, // box shadow per android
    shadowColor: "#000", // box shadow per ios
    shadowOffset: { width: 0, height: 2 }, // box shadow per ios
    shadowRadius: 6, // box shadow per ios
    shadowOpacity: 0.5, // box shadow per ios
  },
  inputTitle: {
    fontSize: 20,
    color: Colors.accent500,
    textAlign: "center",
    marginBottom: 10,
  },

  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
