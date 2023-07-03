// Hooks and Dependencies
import React from "react";

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
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { Hero } from "../components";
import { Card } from "react-native-shadow-cards";

// Styles
import { globalStyles, utils } from "../globalStyles/styles";

const OTP = ({ navigation }) => {
  const navigateToResetPass = () => {
    navigation.navigate("ResetPassword");
  };
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
                styles.paddingBottom,
              ]}
            >
              <View style={globalStyles.welcomeTextContainer}>
                <Text style={globalStyles.signUpText}>Enter OTP</Text>
                <Text
                  style={[globalStyles.paragraph, styles.businessParagraph]}
                >
                  We've sent you an email with OTP to recover your email
                </Text>
              </View>
              <View>
                <OTPInputView
                  style={{ width: "100%", height: 100, padding: 20 }}
                  pinCount={4}
                  autoFocusOnLoad
                  codeInputFieldStyle={{
                    borderWidth: 0,
                    borderBottomWidth: 4,
                    color: utils.primary,
                    fontSize: 36,
                    fontFamily: utils.interBold,
                    paddingBottom: 15,
                  }}
                />
              </View>
              <View style={globalStyles.btnContainer}>
                <TouchableOpacity onPress={navigateToResetPass}>
                  <View style={globalStyles.btnWrapper}>
                    <Text style={globalStyles.btn}>Next</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Card>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: utils.other,
    position: "relative",
  },
  businessParagraph: {
    textAlign: "center",
    width: "90%",
  },
  paddingBottom: {
    paddingBottom: 50,
  },
});

export default OTP;
