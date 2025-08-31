import { StyleSheet, useColorScheme } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";

const RootLayout = () => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return (
    <>
      <StatusBar style="auto" />
      {/*Simalar to Slot - renders page + adds header with navigation */}
      {/* Options individually for each page, or globally on Stack using screenOptions */}
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.navBackground,
          },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />
      </Stack>
      {/* Automatically adds in the index page (like children) */}
      {/* <Slot /> */}
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
