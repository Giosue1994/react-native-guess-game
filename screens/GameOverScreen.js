import { View, StyleSheet, Image, Text } from "react-native";
import React from "react";
import Title from "../components/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({ rounds, userNumber, onStartNewGame }) {
  return (
    <View style={styles.container}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.text}>
        Your phone needed <Text style={styles.highlight}>{rounds} </Text>
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>.
      </Text>
      <PrimaryButton pressFn={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    overflow: "hidden",
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "Open-Sans",
    marginVertical: 30,
    fontSize: 22,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "Open-Sans-Bold",
    color: Colors.primary500,
  },
});
