import React from "react";
import Main from "./src/Login";
import { NativeBaseProvider, StatusBar } from "native-base";
import { THEMES } from "./src/styles/themes";

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <StatusBar backgroundColor={THEMES.colors.blue[500]}/>
      <Main />
    </NativeBaseProvider>
  );
}
