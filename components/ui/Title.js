import { StyleSheet, Text, Platform } from "react-native";

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Open-Sans-Bold",
    fontSize: 25,
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "#ffffff",
    color: "#ffffff",
    padding: 8,
    textAlign: "center",
    marginBottom: 30,
    maxWidth: "80%",
    width: 300,
  },
});
