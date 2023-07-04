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
  ScrollView,
} from "react-native";

// Styles
import { globalStyles, utils } from "../globalStyles/styles";

// Icons
import { Hero } from "../components";
import { Card } from "react-native-shadow-cards";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AppContext } from "../../context";

const ResetPassword = ({ navigation }) => {
  // States
  const [confirmPass, setConfirmPass] = useState(true);
  const { password, togglePasswordVisibility } = useContext(AppContext);

  // Functions
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

  const toggleConfirmPass = () => {
    setConfirmPass(!confirmPass);
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
                <Text style={globalStyles.signUpText}>Enter new Password</Text>
                <Text
                  style={[globalStyles.paragraph, styles.businessParagraph]}
                >
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
                    secureTextEntry={password}
                  />
                  <TouchableOpacity
                    style={{ width: "15%" }}
                    onPress={togglePasswordVisibility}
                  >
                    <MaterialIcons
                      name={password ? "visibility" : "visibility-off"}
                      size={20}
                      color={utils.primary}
                    />
                  </TouchableOpacity>
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
                    secureTextEntry={confirmPass}
                  />
                  <TouchableOpacity
                    style={{ width: "15%" }}
                    onPress={toggleConfirmPass}
                  >
                    <MaterialIcons
                      name={confirmPass ? "visibility" : "visibility-off"}
                      size={20}
                      color={utils.primary}
                    />
                  </TouchableOpacity>
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
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: utils.other,
    position: "relative",
    height: 700,
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
