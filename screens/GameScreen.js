import { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  useWindowDimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import CardTitle from "../components/ui/CardTitle";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Ionicons } from "@expo/vector-icons";
import LogItem from "../components/game/LogItem";
import NumberContainer from "../components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minLimit = 1;
let maxLimit = 100;

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const { width, height } = useWindowDimensions();

  function higherLowerHandler(direction) {
    if (
      (direction === "higher" && currentGuess > userNumber) ||
      (direction === "lower" && currentGuess < userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "higher") {
      minLimit = currentGuess + 1;
    } else {
      maxLimit = currentGuess;
    }

    // al click dei pulsanti generare un nuovo numero in base ai limiti imposti sopra
    const newRandomNumber = generateRandomBetween(
      minLimit,
      maxLimit,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);

    setGuessRounds((prevRounds) => {
      return [newRandomNumber, ...prevRounds];
    });
  }

  let guessRoundListLength = guessRounds.length;

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRoundListLength);
      minLimit = 1;
      maxLimit = 100;
    }
  }, [currentGuess, userNumber, onGameOver, guessRoundListLength]);

  const marginTopDevice = height < 380 ? 30 : 100;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <CardTitle>Higher or Lower?</CardTitle>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressFn={() => higherLowerHandler("lower")}>
              <Ionicons name="remove-circle-outline" size={24} color="#fff" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressFn={() => higherLowerHandler("higher")}>
              <Ionicons name="add-circle-outline" size={24} color="#fff" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 500) {
    content = (
      <>
        {/* <CardTitle>Higher or Lower?</CardTitle> */}
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressFn={() => higherLowerHandler("lower")}>
              <Ionicons name="remove-circle-outline" size={24} color="#fff" />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton pressFn={() => higherLowerHandler("higher")}>
              <Ionicons name="add-circle-outline" size={24} color="#fff" />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={[styles.container, { marginTop: marginTopDevice }]}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <LogItem index={guessRoundListLength - index} guessNumber={item} />
          )}
          keyExtractor={(item) => {
            return item;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  buttonsContainerWide: {
    flexDirection: "row",
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
  },
});
