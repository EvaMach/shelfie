import { DimensionValue, View } from "react-native";

interface Props {
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
}

const Spacer = ({ width = "100%", height = 40 }: Props) => {
  return <View style={{ width, height }} />;
};

export default Spacer;
