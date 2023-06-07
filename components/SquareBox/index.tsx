import { FC } from "react";
import { Box, View } from "native-base";
import React from "react";
import { INativebaseConfig } from "native-base"; // Update the import path for INativebaseConfig
import { NativeBaseProvider } from "native-base"; // Update the import path for NativeBaseConfigProvider

interface SquareBoxProps {
  children: any;
}
const SquareBox: FC<SquareBoxProps> = ({ children }) => {

  return (
      <Box w={'fit-content'} h={100} flexDir={'row'} backgroundColor={'blue.300'} borderWidth={1} p={2}>
        {children}
      </Box>
  );
};

export default SquareBox;
