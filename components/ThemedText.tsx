import { StyleProp, Text, TextStyle, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

interface Props {
  style?: StyleProp<TextStyle>;
  title?: boolean;
  children: React.ReactNode;
}

const ThemedText = ({ style, title = false, ...props }: Props) => {
  const colorScheme = useColorScheme() ?? "light";
  const theme = Colors[colorScheme];

  const textColor = title ? theme.title : theme.text;

  return <Text style={[{ color: textColor }, style]} {...props} />;
};

export default ThemedText;
