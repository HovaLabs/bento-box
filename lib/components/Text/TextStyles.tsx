import { Text as TextRN } from "react-native";
import { createStyledComponent } from "../../helpers";
import { Typography } from '../../theme/typography';
import { StyleObject } from '../../types';

interface TextStylesProps {
    typography: keyof Typography
}

export const Text = createStyledComponent(TextRN)((c, p) => {
    const typographyStyleKey = p.typography as keyof Typography;
    const style = c.theme.typography[typographyStyleKey] as StyleObject;
    return style;
});