import { Text as TextRN } from "react-native";
import { createStyledComponent } from "../../helpers";
import { StyleObject, Typography } from "../../types";

export const Text = createStyledComponent(TextRN)((c, p) => {
  const typographyStyleKey = p.typography as keyof Typography;

  const style = {
    // Destructure the typography value so that we dont mutate it
    ...c.theme.typography[typographyStyleKey],
    // we want color aliasing in the typography declaration
    // then we have to match the alias to the color here
    color: c.theme.colors[c.theme.typography[typographyStyleKey].color]
  } as StyleObject;

  return style;
});
