import React from "react";
import { Text } from "native-base";

const Title = ({text}) => {
  return (
    <Text
      mb={10}
      fontSize="2xl"
      fontWeight="bold"
      color="gray.500"
      textAlign="center"
      mt="5"
    >
      {text}
    </Text>
  );
};

export default Title;
