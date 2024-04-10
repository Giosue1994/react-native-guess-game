import { StyleSheet, Text, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.guessContainer}>
      <Text style={styles.guessNumber}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  guessContainer: {
    borderWidth: 3,
    borderColor: Colors.accent500,
    borderRadius: 10,
    padding: deviceWidth < 320 ? 12 : 24,
    margin: deviceWidth < 320 ? 12 : 24,
  },
  guessNumber: {
    fontFamily: "Open-Sans-Bold",
    fontSize: deviceWidth < 320 ? 18 : 36,
    color: Colors.accent500,
    textAlign: "center",
  },
});
