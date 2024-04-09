import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../constants/colors";
import Card from "../components/Card";

export default function StartGameScreen({ onConfirm }) {
  const [number, setNumber] = useState("");

  function userNumberHandler(userNumber) {
    setNumber(userNumber);
  }

  function resetNumberHandler() {
    setNumber("");
  }

  function confirmNumberHandler() {
    const chosenNumber = parseInt(number);

    if (isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber <= 0) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "ok", style: "destructive", onPress: resetNumberHandler }]
      );
      return;
    }

    setNumber("");
    onConfirm(chosenNumber);
  }

  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>

      <Card title="Enter a number">
        <TextInput
          style={styles.textInput}
          value={number}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={userNumberHandler}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressFn={resetNumberHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressFn={confirmNumberHandler}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    color: Colors.accent500,
    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,
    padding: 5,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    width: 50,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
});
