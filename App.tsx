import React from "react";
import Login from "./src/pages/Login";
import Register from "./src/pages/RegisterUser";
import RegisterAddress from "./src/pages/RegisterAdress";
import Tabs from './src/tabs';
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
          <Stack.Screen
            name="Home"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
          />
          <Stack.Screen
            name="Register address"
            component={RegisterAddress}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tabs"
            component={Tabs}
          />
        </Stack.Navigator>
      </NavigationContainer>
        <StatusBar backgroundColor={THEMES.colors.blue[800]} />
    </NativeBaseProvider>
  );
}
