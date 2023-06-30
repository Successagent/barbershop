import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { utils } from "../globalStyles/styles";
import { AntDesign } from "@expo/vector-icons";

const Hero = ({ navigation }) => {
  const navigateSplash = () => {
    if (navigation.state.routeName === "Welcome") {
      navigation.navigate("Splash");
    } else if (navigation.state.routeName === "SignIn") {
      navigation.navigate("Welcome");
    } else if (navigation.state.routeName === "SignUp") {
      navigation.goBack();
    } else if (navigation.state.routeName === "Individual") {
      navigation.goBack();
    } else if (navigation.state.routeName === "Business") {
      navigation.goBack();
    } else if (navigation.state.routeName === "ForgetPassword") {
      navigation.goBack();
    } else if (navigation.state.routeName === "OTP") {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.hero}>
      <View>
        <TouchableOpacity onPress={navigateSplash}>
          <AntDesign
            style={{ marginTop: 50 }}
            size={24}
            color={utils.other}
            name="arrowleft"
          />
        </TouchableOpacity>
        <Image
          style={styles.heroback}
          source={require("../assets/heroback.png")}
        />
      </View>
      <View style={styles.heroImageContainer}>
        <Image source={require("../assets/heroImage.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  hero: {
    height: 300,
    width: "100%",
    backgroundColor: utils.secondary,
    padding: 15,
    paddingTop: 0,
  },
  heroback: {
    position: "absolute",
    left: 170,
    height: 172,
    width: 180,
    zIndex: 1,
  },
  heroImageContainer: {
    display: "flex",
    alignItems: "center",
  },
});

export default Hero;
