import {
  VStack,
  Image,
  Text,
  Box,
  FormControl,
  Input,
  Button,
  Link,
} from "native-base";
import Title from "../components/Title";
import Inputs from "../components/Inputs";
import Logo from "../images/Logo.png";
import React from "react";

export default function Register({ navigation }) {
  return (
    <VStack
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="gray.200"
      p={5}
    >
      <Image mb={10} source={Logo} alt="logo" />
      <Title text={"Insira alguns dados básicos: "} />
      <Box>
        <Inputs label={"Nome"} placeholder={"digite seu nome"} />

        <Inputs label={"Email"} placeholder={"digite seu Email"} />

        <Inputs label={"Crie uma senha"} placeholder={"Insira uma senha"} />

        <Inputs label={"Repita a senha"} placeholder={"Insira uma senha"} />
      </Box>
      
      <Button
        onPress={() => {
          navigation.navigate("Register address");
        }}
        w="100%"
        bg="blue.800"
        mt={5}
        borderRadius="lg"
      >
        Avançar
      </Button>
    </VStack>
  );
}
