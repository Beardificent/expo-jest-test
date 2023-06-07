import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BoxWithIcon, SquareBox } from "./components";
import { Center, NativeBaseProvider, VStack } from "native-base";

export default function App() {
  const inset = {
    frame: { x: 0, y: 0, width: 0, height: 0 },
    insets: { top: 0, left: 0, right: 0, bottom: 0 },
  };

  return (
    <NativeBaseProvider initialWindowMetrics={inset}>
      <SafeAreaProvider>
        <VStack space={10} p={10}>
          <BoxWithIcon iconName="user" text="Hello BoxWithIcon" />
          <SquareBox children={"Hello SquareBox"} />
        </VStack>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
}
