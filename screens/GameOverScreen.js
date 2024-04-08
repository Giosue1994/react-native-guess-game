import { View, StyleSheet } from "react-native";
import React from "react";
import Title from "../components/Title";

export default function GameOverScreen() {
  return (
    <View style={styles.container}>
      <Title>Game Over</Title>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
