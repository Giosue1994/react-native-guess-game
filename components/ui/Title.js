import { StyleSheet, Text } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Open-Sans-Bold",
    fontSize: 25,
    borderWidth: 3,
    borderColor: "#ffffff",
    color: "#ffffff",
    padding: 8,
    textAlign: "center",
    marginBottom: 30,
    maxWidth: "80%",
    width: 300,
  },
});
