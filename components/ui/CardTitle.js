import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export default function CardTitle({ children }) {
  return <Text style={styles.cardTitle}>{children}</Text>;
}

const styles = StyleSheet.create({
  cardTitle: {
    fontFamily: "Open-Sans-Bold",
    fontSize: 23,
    color: Colors.accent500,
    textAlign: "center",
    marginBottom: 10,
  },
});
