import {
  VStack,
  Image,
  Box,
  Button,
} from "native-base";
import Title from "../components/Title";
import Inputs from "../components/Inputs";
import Logo from "../images/Logo.png";
import React from "react";

export default function RegisterAddress({navigation}) {
  return (
    <VStack
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="gray.2 00"
      p={5}
    >
      <Image mb={10} source={Logo} alt="logo" />
      <Title text={"Agora, mais alguns dados sobre você: "} />
      <Box>
        <Inputs label={"CEP"} placeholder={"Insira seu CEP"} />

        <Inputs label={"Endereço"} placeholder={"Insira seu endereço"} />

        <Inputs label={"Número"} placeholder={"Insira seu número"} />

        <Inputs label={"Complemento"} placeholder={"Insira seu complemento"} />

        <Inputs label={"Telefone"} placeholder={"(00) 00000-0000"} />
      </Box>
      <Button
        onPress={() => {
          navigation.navigate("Register");
        }}
        w="100%"
        bg="gray.300"
        mt={5}
        borderRadius="lg"
      >
        Voltar
      </Button>
      <Button w="100%" bg="blue.800" mt={4} borderRadius="lg">
        Avançar
      </Button>
    </VStack>
  );
}
