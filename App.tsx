import React from "react";
import Main from "./src/pages/Login";
import Register from "./src/pages/Register";
import RegisterAddress from "./src/pages/RegisterAddress";
import { NativeBaseProvider, StatusBar } from "native-base";
import { THEMES } from "./src/styles/themes";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider theme={THEMES}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Main} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name= "Register address" component={RegisterAddress} />
        </Stack.Navigator>
        <StatusBar backgroundColor={THEMES.colors.blue[800]} />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
