import { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import Greet from "./components/Greet";
import Box from "./components/Box";
const logoImage = require("./assets/icon.png");

export default function App() {
  const [isModalVisiable, setIsModalVisiable] = useState(false);
  const closeModel = () => setIsModalVisiable(false);
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "pink", padding: 60 }}>
        <ScrollView>
          <StatusBar backgroundColor="lightgreen" barStyle="default" />
          <ActivityIndicator size="large" color="red" />
          <ActivityIndicator size="small" color="green" animating={false} />
          <Greet name="Jack" style={{ color: "red" }} />
          <View style={styles.darkMode}>
            <Text style={styles.colorWhite}>
              Hello World!<Text style={styles.bold}> in Bold</Text>
            </Text>
          </View>
          <View style={[styles.box, styles.lightGreenBg, styles.boxShadow]}>
            <Text>lightGreen Box</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              flexWrap: "nowrap",
              gap: 10,
            }}
          >
            <Box style={{ backgroundColor: "green" }}>Box1</Box>
            <Box style={{ backgroundColor: "red", flexBasic: 150 }}>Box2</Box>
            <Box style={{ backgroundColor: "yellow" }}>Box3</Box>
          </View>
          {/* <Text>
            <Text style={{ color: "white", backgroundColor: "black" }}>
              Hello
            </Text>{" "}
            World! Leo!
          </Text> */}
          <Image
            source={logoImage}
            style={{ width: 200, height: 200, marginTop: 20 }}
          />
          {/* <Image
        source={{ uri: "https://picsum.photos/200" }}
        style={{ width: 200, height: 200, marginTop: 20 }}
      /> */}
          {/* <ImageBackground source={logoImage} style={{ flex: 
          1 }}>
        <Text>IMage Text</Text>
      </ImageBackground> */}
          <Button
            title="Click Me"
            onPress={() =>
              Alert.alert("invalid data", "miss touch", [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: () => console.log("OK Pressed"),
                },
              ])
            }
            color="red"
            disabled={false}
          />
          <Pressable onPress={() => setIsModalVisiable(true)}>
            <Text>
              Some more text Veniam consectetur aliqua irure ipsum ea ad nisi
              sunt quis elit anim do tempor. Tempor esse minim ipsum consectetur
              ex mollit magna. Sunt veniam ipsum sunt officia aliqua in
              exercitation labore laborum voluptate anim commodo enim laboris.
              Et ad sit eu magna. Lorem exercitation consequat sint est ex.
              Dolor irure reprehenderit do cupidatat excepteur exercitation et
              dolor amet id. Ea deserunt anim magna aliquip deserunt anim Lorem
              nulla.
            </Text>
          </Pressable>
          <Modal
            visible={isModalVisiable}
            onRequestClose={closeModel}
            animationType="slide"
            presentationStyle="formSheet"
          >
            <View style={{ flex: 1, backgroundColor: "aqua", padding: 60 }}>
              <Text>Modal Text</Text>
              <Button title="Close" onPress={closeModel} color="red" />
            </View>
          </Modal>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  darkMode: {
    backgroundColor: "black",
  },
  colorWhite: {
    color: "white",
  },
  bold: {
    fontWeight: "700",
  },
  box: {
    width: "25%",
    height: 100,
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 20,
    borderBlockColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
  lightGreenBg: {
    backgroundColor: "lightgreen",
  },
  boxShadow: {
    shadowColor: "#333",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  androidShadow: {
    elevation: 10,
  },
});
