import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {
  Business,
  ForgetPassword,
  Individual,
  OTP,
  ResetPassword,
  SignIn,
  SignUp,
  Splash,
  Welcome,
} from "../app/screens";

const screen = {
  Splash: {
    screen: Splash,
  },
  Welcome: {
    screen: Welcome,
  },
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
  },
  Individual: {
    screen: Individual,
  },
  Business: {
    screen: Business,
  },
  ForgetPassword: {
    screen: ForgetPassword,
  },
  OTP: {
    screen: OTP,
  },
  ResetPassword: {
    screen: ResetPassword,
  },
};

const SplashStack = createStackNavigator(screen, { headerMode: "none" });

export default createAppContainer(SplashStack);
