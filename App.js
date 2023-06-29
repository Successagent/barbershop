// Hooks and Dependencies
import { useEffect } from "react";

// ReactNative Components
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import Navigator from "./routes/SplashStatck";
// Font
import { useFonts } from "expo-font";

// Components

export default function App() {
  // States
  const [fontLoaded] = useFonts({
    "cerapro-regular": require("./app/assets/fonts/Fontspring-DEMO-cerapro-regular.otf"),
    "cerapro-bold": require("./app/assets/fonts/Fontspring-DEMO-cerapro-bold.otf"),
    "inter-regular": require("./app/assets/fonts/Inter-Regular.ttf"),
    "inter-bold": require("./app/assets/fonts/Inter-Bold.ttf"),
    "inter-medium": require("./app/assets/fonts/Inter-Medium.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      return SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }
  return (
    <>
      <Navigator ScreenOptions={{ headerShown: false }}></Navigator>
      <StatusBar style="auto" />
    </>
  );
}
