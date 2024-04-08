import { View, StyleSheet, Text, Pressable } from "react-native";

export default function PrimaryButton({ title, pressFn }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedItem]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#610030" }}
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
    backgroundColor: "#72063c",
    paddingVertical: 10,
    elevation: 2,
  },
  pressedItem: {
    backgroundColor: "#610030",
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
  },
});
