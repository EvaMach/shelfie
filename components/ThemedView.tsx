import {
  StyleProp,
  StyleSheet,
  useColorScheme,
  View,
  ViewStyle,
} from "react-native";
import React, { CSSProperties } from "react";
import { Colors } from "../constants/Colors";

interface Props {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const ThemedView = ({ style, children, ...props }: Props) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  return (
    <View
      style={[
        {
          backgroundColor: theme.background,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
};

export default ThemedView;

const styles = StyleSheet.create({});
