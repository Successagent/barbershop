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
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Business = ({ navigation }) => {
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
              <Text style={globalStyles.signUpText}>Sign up as a Business</Text>
              <Text style={[globalStyles.paragraph, styles.businessParagraph]}>
                Find Saloons, list your saloon and manage location
              </Text>
            </View>
            <View
              style={[
                globalStyles.formContainer,
                globalStyles.welcomeTextContainer,
              ]}
            >
              <View style={globalStyles.inputContainer}>
                <Feather
                  style={{ width: "10%" }}
                  name="phone"
                  size={20}
                  color={utils.primary}
                />
                <TextInput
                  style={[globalStyles.textInput, { width: "90%" }]}
                  placeholder="Full Name"
                />
              </View>
              <View style={globalStyles.inputContainer}>
                <Feather
                  style={{ width: "10%" }}
                  name="user"
                  size={20}
                  color={utils.primary}
                />
                <TextInput
                  style={[globalStyles.textInput, { width: "90%" }]}
                  placeholder="Phone Number"
                />
              </View>
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
              <TouchableOpacity>
                <View style={globalStyles.btnWrapper}>
                  <Text style={globalStyles.btn}>Sign Up</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Card>
          <TouchableOpacity onPress={navigateToSignIn}>
            <View style={[globalStyles.welcomFooter, { marginTop: 40 }]}>
              <Text style={globalStyles.footerText}>
                Already have an account?
                <Text style={{ color: utils.secondary }}> Sign In</Text>
              </Text>
            </View>
          </TouchableOpacity>
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
});

export default Business;
