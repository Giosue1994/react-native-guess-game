import { View, StyleSheet, Text, Pressable } from "react-native";
import Colors from "../constants/colors";

export default function PrimaryButton({ title, pressFn }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedItem]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary600 }}
        onPress={pressFn}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 30,
    margin: 10,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 10,
    elevation: 2,
  },
  pressedItem: {
    backgroundColor: Colors.primary600,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
});
