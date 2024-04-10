import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import React from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

export default function GameOverScreen({ rounds, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 320) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 100;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <View style={styles.container}>
      <Title>GAME OVER</Title>
      <View style={[styles.imageContainer, imageStyle]}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.text}>
        Your phone needed <Text style={styles.highlight}>{rounds} </Text>
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>.
      </Text>
      <PrimaryButton pressFn={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentWide: {
    flex: 1,
    flexDirection: "row",
  },
  imageContainer: {
    overflow: "hidden",
    // width: deviceWidth < 320 ? 150 : 300,
    // height: deviceWidth < 320 ? 150 : 300,
    // borderRadius: deviceWidth < 320 ? 75 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontFamily: "Open-Sans",
    marginVertical: 20,
    fontSize: deviceWidth < 380 ? 18 : 22,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  highlight: {
    fontFamily: "Open-Sans-Bold",
    color: Colors.primary500,
  },
});
