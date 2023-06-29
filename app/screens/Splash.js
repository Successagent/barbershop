import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { globalStyles, utils } from "../globalStyles/styles";

const Splash = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => navigation.navigate("Welcome")}>
      <ImageBackground
        style={styles.container}
        source={require("../assets/splashbackground.png")}
      >
        <Image source={require("../assets/logo.png")} />
        <Text style={styles.text}>Barberapp</Text>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: utils.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  splashImage: {
    width: 120,
    height: 148,
  },
  text: {
    color: utils.other,
    fontFamily: utils.primaryFont,
    fontSize: 40,
    fontWeight: 400,
    marginTop: 10,
  },
});

export default Splash;
