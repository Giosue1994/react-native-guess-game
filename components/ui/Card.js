import { StyleSheet, View, Text, Dimensions } from "react-native";
import Colors from "../../constants/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    width: "90%",
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: deviceWidth < 320 ? 28 : 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary800,
    elevation: 4, // box shadow per android
    shadowColor: "#000", // box shadow per ios
    shadowOffset: { width: 0, height: 2 }, // box shadow per ios
    shadowRadius: 6, // box shadow per ios
    shadowOpacity: 0.5, // box shadow per ios
  },
});
