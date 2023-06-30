import React, { useEffect } from "react";

import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";

import { globalStyles, utils } from "../globalStyles/styles";
import { Hero } from "../components";
import { Card } from "react-native-shadow-cards";
import { AntDesign } from "@expo/vector-icons";
import { useForm } from "react-hook-form";

const ForgetPassword = ({ navigation }) => {
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleForm = (data) => {
    if (data) {
      navigation.navigate("OTP");
    }
  };

  useEffect(() => {
    register("email", { required: true });
  }, [register]);
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
              <Text style={globalStyles.signUpText}>Forget Password?</Text>
              <Text style={[globalStyles.paragraph, styles.businessParagraph]}>
                Enter your email associated with account
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
                  onChangeText={(text) => setValue("email", text, true)}
                  keyboardType="email-address"
                />
              </View>
            </View>
            <View style={globalStyles.btnContainer}>
              <TouchableOpacity onPress={handleSubmit(handleForm)}>
                <View style={globalStyles.btnWrapper}>
                  <Text style={globalStyles.btn}>Send OTP</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Card>
          <TouchableOpacity onPress={navigateToSignIn}>
            <View style={[globalStyles.welcomFooter, { marginTop: 250 }]}>
              <Text style={globalStyles.footerText}>
                Remember Password?
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
  paddingBottom: {
    paddingBottom: 50,
  },
});

export default ForgetPassword;
