import React from "react";
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
} from "react-native";

import { globalStyles, utils } from "../globalStyles/styles";
import { Hero } from "../components";
import { Card } from "react-native-shadow-cards";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ResetPassword = ({ navigation }) => {
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.wrapper}>
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
              <Text style={globalStyles.signUpText}>Enter new Password</Text>
              <Text style={[globalStyles.paragraph, styles.businessParagraph]}>
                Enter a new secure password
              </Text>
            </View>
            <View
              style={[
                globalStyles.formContainer,
                globalStyles.welcomeTextContainer,
              ]}
            >
              <View style={globalStyles.inputContainer}>
                <EvilIcons
                  style={{ width: "10%" }}
                  name="lock"
                  size={28}
                  color={utils.primary}
                />
                <TextInput
                  style={[globalStyles.textInput, { width: "75%" }]}
                  placeholder="New Password"
                />
                <MaterialIcons
                  name="visibility"
                  size={20}
                  color={utils.primary}
                  style={{ width: "15%" }}
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
                  placeholder="Confirm Password"
                />
                <MaterialIcons
                  name="visibility"
                  size={20}
                  color={utils.primary}
                  style={{ width: "15%" }}
                />
              </View>
            </View>
            <View style={globalStyles.btnContainer}>
              <TouchableOpacity onPress={navigateToSignIn}>
                <View style={globalStyles.btnWrapper}>
                  <Text style={globalStyles.btn}>Sign In</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </View>
    </TouchableWithoutFeedback>
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

export default ResetPassword;
