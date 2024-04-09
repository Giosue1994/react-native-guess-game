import { StyleSheet, Text, View } from "react-native";

export default function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: "Opens-Sans-Bold",
    fontSize: 25,
    borderWidth: 3,
    borderColor: "#ffffff",
    color: "#ffffff",
    padding: 8,
    textAlign: "center",
    marginBottom: 30,
  },
});
