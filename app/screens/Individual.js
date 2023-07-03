// Hooks and Dependencies
import React, { useState } from "react";

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
import { Feather } from "@expo/vector-icons";

const Individual = ({ navigation }) => {
  // States
  const [password, setPassword] = useState(true);

  // Functions
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

  const togglePasswordVisibility = () => {
    setPassword(!password);
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
                ,
                { marginTop: -110 },
              ]}
            >
              <View style={globalStyles.welcomeTextContainer}>
                <Text style={globalStyles.signUpText}>
                  Sign up as an Individual
                </Text>
                <Text style={globalStyles.paragraph}>
                  Find Saloons nearby as an Individual
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
                    name={password ? "visibility-off" : "visibility"}
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
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Individual;

const styles = StyleSheet.create({
  container: {
    backgroundColor: utils.other,
    position: "relative",
  },
});
