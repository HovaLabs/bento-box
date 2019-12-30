import { Text as TextRN } from "react-native";
import { createStyledComponent } from "../../helpers";
import { StyleObject, Typography } from "../../types";

export const Text = createStyledComponent(TextRN)((c, p) => {
  const typographyStyleKey = p.typography as keyof Typography;
  const style = c.theme.typography[typographyStyleKey] as StyleObject;
  return style;
});
