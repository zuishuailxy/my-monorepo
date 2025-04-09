import { StyleSheet, SafeAreaView, Platform, ScrollView } from "react-native";
import PokemonCard from "./components/PokemonCard";

export default function App() {
  const monkeyData = {
    name: "Monkey",
    type: "Fire",
    image: require("./assets/monkey.png"),
    hp: 39,
    moves: ["Scratch", "Ember", "Growl", "Leer"],
    weaknesses: ["Water", "Rock"],
  };
  const OIPData = {
    name: "OIP",
    type: "water",
    image: require("./assets/OIP.png"),
    hp: 20,
    moves: ["Scratch", "Growl", "Leer"],
    weaknesses: ["Fire", "Electric"],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <PokemonCard {...monkeyData} />
        <PokemonCard {...OIPData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
