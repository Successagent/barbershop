// Hooks and Dependencies
import React, { useContext, useState } from "react";

// Components
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { Hero } from "../components";
import { Card } from "react-native-shadow-cards";

// Styles
import { globalStyles, utils } from "../globalStyles/styles";

// Icons
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AppContext } from "../../context";

const SignIn = ({ navigation }) => {
  const { password, togglePasswordVisibility } = useContext(AppContext);

  // Functions
  const navigateToSignUp = () => {
    navigation.navigate("SignUp");
  };
  const navigateToForgetPassword = () => {
    navigation.navigate("ForgetPassword");
  };

  console.log(password);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: utils.secondary }}></SafeAreaView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <SafeAreaView style={globalStyles.wrapper}>
          <View style={[globalStyles.container, styles.container]}>
            <Hero navigation={navigation} />
            <Card
              style={[
                globalStyles.welcomeSignContainer,
                globalStyles.signUpContainer,
              ]}
            >
              <View style={globalStyles.welcomeTextContainer}>
                <Text style={globalStyles.signUpText}>
                  Sign in to your account
                </Text>
                <Text style={globalStyles.paragraph}>
                  Welcome back, we missed you!
                </Text>
              </View>
              <View
                style={[
                  globalStyles.formContainer,
                  globalStyles.welcomeTextContainer,
                ]}
              >
                <View style={globalStyles.inputContainer}>
                  <AntDesign
                    style={{ width: "10%" }}
                    name="inbox"
                    size={20}
                    color={utils.primary}
                  />
                  <TextInput
                    style={[globalStyles.textInput, { width: "90%" }]}
                    placeholder="Email"
                    keyboardType="email-address"
                  />
                </View>
                <View style={globalStyles.inputContainer}>
                  <EvilIcons
                    style={{ width: "10%" }}
                    name="lock"
                    size={28}
                    color={utils.primary}
                  />
                  <TextInput
                    style={[globalStyles.textInput, { width: "75%" }]}
                    placeholder="Password"
                    secureTextEntry={password}
                  />
                  <TouchableOpacity
                    style={{
                      width: "15%",
                    }}
                    onPress={togglePasswordVisibility}
                  >
                    <MaterialIcons
                      name={password ? "visibility-off" : "visibility"}
                      size={20}
                      color={utils.primary}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={globalStyles.btnContainer}>
                <TouchableOpacity>
                  <View style={globalStyles.btnWrapper}>
                    <Text style={globalStyles.btn}>Sign In</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigateToForgetPassword}>
                  <View
                    style={[
                      globalStyles.btnWrapper,
                      {
                        borderColor: utils.other,
                        backgroundColor: utils.other,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        globalStyles.btn,
                        {
                          color: utils.secondary,
                          fontFamily: utils.primaryFont,
                        },
                      ]}
                    >
                      Forget Password
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Card>
            <TouchableOpacity onPress={navigateToSignUp}>
              <View style={[globalStyles.welcomFooter, { marginTop: 90 }]}>
                <Text style={globalStyles.footerText}>
                  Dont have an account?
                  <Text style={{ color: utils.secondary }}> Sign Up</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: utils.other,
    position: "positive",
  },
});

export default SignIn;
