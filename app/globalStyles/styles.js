import { StyleSheet } from "react-native";

export const utils = {
  primary: "#212121",
  secondary: "#FFBF00",
  other: "white",
  primaryFont: "cerapro-bold",
  secondaryFont: "cerapro-regular",
  interBold: "inter-bold",
  interRegular: "inter-regular",
  interMedium: "inter-medium",
};

export const globalStyles = StyleSheet.create({
  btn: {
    color: utils.other,
    fontFamily: utils.interRegular,
    fontSize: 16,
    fontWeight: 500,
  },
  btnContainer: {
    marginTop: 30,
    display: "flex",
    alignItems: "center",
    gap: 25,
  },
  btnWrapper: {
    width: 301,
    height: 50,
    backgroundColor: utils.secondary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
  },
  footerText: {
    fontSize: 16,
    fontFamily: utils.primaryFont,
    textAlign: "center",
  },
  formContainer: {
    display: "flex",
    gap: 20,
    marginTop: 30,
  },
  paddingBottom: { paddingBottom: 35 },
  signUpContainer: {
    paddingBottom: 20,
  },

  inputContainer: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
    borderRadius: 10,
  },

  paragraph: {
    fontSize: 14,
    fontWeight: 400,
    fontFamily: utils.interRegular,
  },
  signUpText: {
    color: utils.primary,
    fontSize: 18,
    fontFamily: utils.primaryFont,
    fontWeight: 700,
    marginBottom: 15,
  },
  textInput: {
    fontSize: 16,
  },
  welcomFooter: {
    width: 343,
    margin: "auto",
    marginTop: 120,
  },
  welcomeSignContainer: {
    width: 343,
    margin: "auto",
    backgroundColor: utils.other,
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: "10px",
    marginTop: -80,
    paddingBottom: 80,
  },
  welcomeTextContainer: {
    display: "flex",
    alignItems: "center",
  },
  wrapper: {
    flex: 1,
    backgroundColor: utils.secondary,
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
