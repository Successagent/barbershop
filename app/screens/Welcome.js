import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { globalStyles, utils } from "../globalStyles/styles";
import { Hero } from "../components";
import { Card } from "react-native-shadow-cards";

const Welcome = ({ navigation }) => {
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  return (
    <>
      <SafeAreaView style={{ backgroundColor: utils.secondary }}></SafeAreaView>
      <SafeAreaView
        style={[globalStyles.wrapper, { backgroundColor: "white" }]}
      >
        <View style={[globalStyles.container, styles.container]}>
          <Hero navigation={navigation} />
          <Card style={globalStyles.welcomeSignContainer}>
            <View style={globalStyles.welcomeTextContainer}>
              <Text style={globalStyles.signUpText}>Welcome to Barbershop</Text>
              <Text style={globalStyles.paragraph}>
                Discover Saloons near you
              </Text>
            </View>
            <View style={globalStyles.btnContainer}>
              <TouchableOpacity onPress={navigateToSignIn}>
                <View style={globalStyles.btnWrapper}>
                  <Text style={globalStyles.btn}>Sign In</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateToSignUp}>
                <View
                  style={[
                    globalStyles.btnWrapper,
                    {
                      borderColor: utils.secondary,
                      backgroundColor: utils.other,
                      borderWidth: 1,
                    },
                  ]}
                >
                  <Text style={[globalStyles.btn, { color: utils.secondary }]}>
                    Sign Up
                  </Text>
                </View>
              </TouchableOpacity>
              <Text
                style={[
                  styles.btn,
                  {
                    color: utils.primary,
                    fontFamily: utils.interMedium,
                    marginTop: 30,
                  },
                ]}
              >
                Explore as a Guest
              </Text>
            </View>
          </Card>
          <View style={globalStyles.welcomFooter}>
            <Text style={styles.footerText}>
              By clicking start, you agree to our Terms and Conditions{" "}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: utils.other,
    position: "relative",
  },
  footerText: {
    fontSize: 12,
    fontFamily: utils.secondaryFont,
    textAlign: "center",
    fontWeight: 500,
  },
});

export default Welcome;
