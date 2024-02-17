import { FormControl, Input } from 'native-base';
import React from 'react'

const Inputs = ({placeholder, label}) => {
  return (
    <FormControl mt={3}>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        bg="gray.100"
        shadow={3}
      />
    </FormControl>
  );
}

export default Inputs