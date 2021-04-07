import { StatusBar } from "expo-status-bar";
import React from "react";
import { useFonts } from "expo-font";

import { MainScreen } from "./src/screens/Main/index";

export default function App() {
  const [loaded] = useFonts({
    RobotoRegular: require("./src/assets/fonts/Roboto-Regular.ttf"),
    RobotoMedium: require("./src/assets/fonts/Roboto-Medium.ttf"),
    RobotoBold: require("./src/assets/fonts/Roboto-Bold.ttf"),
    RobotoBlack: require("./src/assets/fonts/Roboto-Black.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <MainScreen></MainScreen>
      <StatusBar style="light" backgroundColor="#67048E" translucent={false} />
    </>
  );
}
