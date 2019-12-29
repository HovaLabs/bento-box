import React from 'react';
import * as S from './TextStyles';
import { Typography } from '../../theme/typography';

export interface TextProps {
  /**
    * The text to be rendered
    */
  children?: string;
  typography?: keyof Typography;
}

export const Text = ({ children, typography }: TextProps) => (
  <S.Text typography={typography}>{children}</S.Text>
);
Text.defaultProps = {
  typography: 'bodyText'
};
