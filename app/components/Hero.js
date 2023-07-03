// Hooks and Dependencies
import React from "react";

// Components
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

// Styles
import { utils } from "../globalStyles/styles";

// Icons
import { AntDesign } from "@expo/vector-icons";

const Hero = ({ navigation }) => {
  const navigateSplash = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.hero}>
      <View>
        {navigation.state.routeName === "Welcome" ? (
          ""
        ) : (
          <TouchableOpacity onPress={navigateSplash}>
            <AntDesign
              style={{ marginTop: 10 }}
              size={24}
              color={utils.other}
              name="arrowleft"
            />
          </TouchableOpacity>
        )}
        <Image
          style={styles.heroback}
          source={require("../assets/heroback.png")}
        />
      </View>
      <View
        style={[
          styles.heroImageContainer,
          {
            marginTop:
              navigation.state.routeName === "Welcome"
                ? 70
                : navigation.state.routeName === "Individual" || "Business"
                ? 0
                : 0,
          },
        ]}
      >
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
