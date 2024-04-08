import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

export default function StartGameScreen() {
  const [number, setNumber] = useState("");

  function userNumberHandler(userNumber) {
    setNumber(userNumber);
  }

  function confirmNumberHandler() {
    const chosenNumber = parseInt(number);

    if (isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber < 1) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "ok", style: "destructive", onPress: resetNumberHandler }]
      );
      return;
    }

    setNumber("");
  }

  function resetNumberHandler() {
    setNumber("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess My Number</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Enter a number</Text>

        <TextInput
          style={styles.textInput}
          value={number}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={userNumberHandler}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton title="Reset" pressFn={resetNumberHandler} />
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton title="Confirm" pressFn={confirmNumberHandler} />
          </View>
        </View>
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
  title: {
    fontSize: 25,
    borderWidth: 3,
    borderColor: "#ffffff",
    color: "#ffffff",
    padding: 8,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  inputContainer: {
    width: "90%",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3d001f",
    elevation: 4, // box shadow per android
    shadowColor: "#000", // box shadow per ios
    shadowOffset: { width: 0, height: 2 }, // box shadow per ios
    shadowRadius: 6, // box shadow per ios
    shadowOpacity: 0.5, // box shadow per ios
  },
  inputTitle: {
    fontSize: 20,
    color: "#ddb52f",
    textAlign: "center",
    marginBottom: 10,
  },
  textInput: {
    color: "#ddb52f",
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
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
});
