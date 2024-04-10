import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import CardTitle from "../components/ui/CardTitle";

export default function StartGameScreen({ onConfirm }) {
  const [number, setNumber] = useState("");
  const { width, height } = useWindowDimensions();

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

  const marginTopDevice = height < 380 ? 30 : 100;

  return (
    <ScrollView style={[styles.screen, { marginTop: marginTopDevice }]}>
      <KeyboardAvoidingView behavior="position" style={styles.screen}>
        <View style={styles.container}>
          <Title>Guess My Number</Title>
          <Card>
            <CardTitle>Enter a number</CardTitle>
            <TextInput
              style={styles.textInput}
              value={number}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={userNumberHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton pressFn={resetNumberHandler}>
                  Reset
                </PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton pressFn={confirmNumberHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
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
