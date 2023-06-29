import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {
  Business,
  Individual,
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
};

const SplashStack = createStackNavigator(screen, { headerMode: "none" });

export default createAppContainer(SplashStack);
