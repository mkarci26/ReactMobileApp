import React from "react";
// 1. import `NativeBaseProvider` component
import { NativeBaseProvider, Text, Box, Heading } from "native-base";

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <Heading>Welcome React Native APP!</Heading>
        <Box m={5}></Box>
        <Text>Sample Content here</Text>
      </Box>
    </NativeBaseProvider>
  );
}