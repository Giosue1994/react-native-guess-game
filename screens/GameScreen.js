import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import Title from "../components/Title";
import Card from "../components/Card";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

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

  function higherLowerHandler(direction) {
    if (
      (direction === "higher" && currentGuess > userNumber) ||
      (direction === "lower" && currentGuess < userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "higher") {
      minLimit = currentGuess + 1;
    } else {
      maxLimit = currentGuess;
    }

    // al click dei pulsanti generare un nuovo numero in base ai limiti imposti sopra
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

      <Card title="Higher or Lower?">
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressFn={() => higherLowerHandler("lower")}>
              <Ionicons name="remove-circle-outline" size={24} color="#fff" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressFn={() => higherLowerHandler("higher")}>
              <Ionicons name="add-circle-outline" size={24} color="#fff" />
            </PrimaryButton>
          </View>
        </View>
      </Card>

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
    fontFamily: "Open-Sans-Bold",
    fontSize: 35,
    color: Colors.accent500,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
