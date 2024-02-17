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
import Logo from "../images/Logo.png";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Login({ navigation }) {
  return (
    <VStack
      flex={1}
      alignItems="center"
      justifyContent="center"
      bg="gray.2 00"
      p={5}
    >
      <Image mb={10} source={Logo} alt="logo" />
      <Title text={"Faça Login em sua conta "} />
      <Box>
        <FormControl mt={3}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            placeholder="Insira seu endereço de email"
            size="lg"
            w="100%"
            borderRadius="lg"
            bg="gray.100"
            shadow={3}
          />
        </FormControl>

        <FormControl mt={3}>
          <FormControl.Label>Senha</FormControl.Label>
          <Input
            placeholder="Insira sua Senha"
            size="lg"
            w="100%"
            borderRadius="lg"
            bg="gray.100"
            shadow={3}
          />
        </FormControl>
      </Box>
      <Button
        w="100%"
        bg="blue.800"
        mt={10}
        borderRadius="lg"
        onPress={() => {
          navigation.navigate("Tabs");
        }}
      >
        Entrar
      </Button>
      <Link href="https://google.com.br">Esqueceu sua senha?</Link>

      <Box pt={10} w="100%" flexDirection="row" justifyContent="center">
        <Text>Ainda não tem cadastro?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text ml={2} color="blue.500">
            Faça seu login
          </Text>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
}
