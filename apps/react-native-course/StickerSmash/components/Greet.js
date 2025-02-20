import { View, Text, StyleSheet } from "react-native";

const Greet = ({ name, style }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, ...style }}>Hello, {name}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "grey", padding: 60 },
  title: { fontSize: 30, color: "white" },
});
export default Greet;
