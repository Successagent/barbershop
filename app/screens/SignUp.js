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
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SignUp = ({ navigation }) => {
  const navigateToSignIn = () => {
    navigation.navigate("SignIn");
  };
  const navigateToIndividual = () => {
    navigation.navigate("Individual");
  };
  const navigateToBusiness = () => {
    navigation.navigate("Business");
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={globalStyles.wrapper}>
        <View style={[globalStyles.container, styles.container]}>
          <Hero navigation={navigation} />
          <Card
            style={[globalStyles.welcomeSignContainer, { paddingBottom: 50 }]}
          >
            <View style={globalStyles.welcomeTextContainer}>
              <Text style={globalStyles.signUpText}>Select account type</Text>
            </View>
            <View
              style={[globalStyles.welcomeTextContainer, styles.accountTypeCon]}
            >
              <TouchableOpacity onPress={navigateToIndividual}>
                <View style={[globalStyles.inputContainer, styles.cardItems]}>
                  <View style={{ width: "90%" }}>
                    <Text style={styles.itemText}>
                      Sign up as an Individual
                    </Text>
                    <Text style={globalStyles.paragraph}>
                      Find Saloons nearby as an Individual
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="greater-than"
                    size={18}
                    color={"#D6D6D6"}
                    style={{ width: "10%" }}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={navigateToBusiness}>
                <View style={[globalStyles.inputContainer, styles.cardItems]}>
                  <View style={{ width: "90%" }}>
                    <Text style={styles.itemText}>Sign up as a Business</Text>
                    <Text style={globalStyles.paragraph}>
                      Find saloons, list your saloon and manage location
                    </Text>
                  </View>
                  <MaterialCommunityIcons
                    name="greater-than"
                    size={18}
                    color={"#D6D6D6"}
                    style={{ width: "10%" }}
                  />
                </View>
              </TouchableOpacity>
            </View>
            <View style={globalStyles.btnContainer}></View>
          </Card>
          <TouchableOpacity onPress={navigateToSignIn}>
            <View style={[globalStyles.welcomFooter, { marginTop: 150 }]}>
              <Text style={styles.footerText}>
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
  accountTypeCon: { gap: 20, marginTop: 30 },
  container: { backgroundColor: utils.other, position: "positive" },
  cardItems: { padding: 20, height: "auto" },
  footerText: {
    fontSize: 16,
    fontFamily: utils.primaryFont,
    textAlign: "center",
  },
  itemText: {
    fontSize: 17,
    fontWeight: 500,
    fontFamily: utils.primaryFont,
    marginBottom: 10,
  },
});

export default SignUp;
