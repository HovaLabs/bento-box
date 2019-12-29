import { TouchableOpacity } from "react-native";
import { createStyledComponent } from "../../helpers";

export const Button = createStyledComponent(TouchableOpacity)(c => ({
  alignItems: "center",
  borderWidth: 0,
  borderRadius: c.theme.radii.l,
  backgroundColor: c.theme.colors.accentPrimary,
  padding: c.theme.spacings.l,
}));
