import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

export default function Log({ index, guessNumber }) {
  return (
    <View style={styles.container}>
      <View style={styles.logContainer}>
        <View>
          <Text style={styles.logText}>#{index}</Text>
        </View>
        <View>
          <Text style={styles.logText}>Opponent's Guess: {guessNumber}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginVertical: 8,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: Colors.primary600,
    width: "100%",
    backgroundColor: Colors.accent500,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.25,
  },
  logText: {
    fontFamily: "Open-Sans",
  },
});
