import React from "react";
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import { IconBaseProps } from "react-icons";

interface IconStyleProps extends IconBaseProps {
  hoverColor?: string;
}
type IconProps = {
  IconComponent: (p: IconStyleProps) => JSX.Element | any; // A bit messy but the typing on built components is crazy
  onPress?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  hoverColor?: string;
  title?: string;
};

const IconWrapper = ({
  IconComponent,
  onPress,
  children,
  size,
  color,
  hoverColor,
  title,
  ...rest
}: IconProps): JSX.Element => {
  if (onPress) {
    const foo = (
      <TouchableOpacity onPress={onPress}>
        <IconComponent
          size={size}
          color={color}
          hoverColor={hoverColor}
          title={title}
          {...rest}
        >
          {children}
        </IconComponent>
      </TouchableOpacity>
    );
    return foo;
  }
  const bar = (
    <IconComponent
      size={size}
      color={color}
      hoverColor={hoverColor}
      title={title}
      {...rest}
    >
      {children}
    </IconComponent>
  );
  return bar;
};

export const Icon = styled(IconWrapper)<IconProps>`
  * {
    color: ${p => p.color || p.theme.colors.primary};
    fill: ${p => p.color || p.theme.colors.primary};
    stroke: ${p => p.color || p.theme.colors.primary};
  }
  :hover * {
    color: ${p => p.hoverColor || p.theme.colors.primary};
    fill: ${p => p.hoverColor || p.theme.colors.primary};
    stroke: ${p => p.hoverColor || p.theme.colors.primary};
  }
`;
