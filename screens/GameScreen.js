import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";

export default function GameScreen({ number }) {
  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>
      <View style={styles.guessContainer}>
        <Text style={styles.guessNumber}>{Math.floor(Math.random() * 99)}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Higher or Lower?</Text>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton title="-" pressFn={[]} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton title="+" pressFn={[]} />
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
    fontSize: 30,
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
