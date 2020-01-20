import React from "react";
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components";
import { StyledIcon } from "styled-icons/types";
import { IconWrapperProps } from "../Icons/IconWrapper";

interface TouchableOpacityWrapperProps {
  onPress?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  size: number;
  children: React.ReactNode;
}
const TouchableOpacityWrapper = ({
  onPress,
  size,
  children,
}: TouchableOpacityWrapperProps): React.ReactElement => {
  if (!onPress) {
    return <>{children}</>;
  }

  return (
    <TouchableOpacity style={{ width: size, height: size }} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

interface IconStylesProps {
  color?: string;
}
const IconStyles = styled("div")<IconStylesProps>`
  * {
    color: ${p => p.color || p.theme.colors.primary};
    fill: ${p => p.color || p.theme.colors.primary};
    stroke: ${p => p.color || p.theme.colors.primary};
  }
`;

type BentoBoxIcon = (props: IconWrapperProps) => React.ReactElement;
interface IconProps {
  size: number;
  IconComponent: StyledIcon | BentoBoxIcon;
  onPress?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
}

export const Icon = ({
  IconComponent,
  onPress,
  size,
  ...rest
}: IconProps): React.ReactElement => {
  return (
    <TouchableOpacityWrapper onPress={onPress} size={size}>
      <IconStyles>
        <IconComponent size={size} {...rest} />
      </IconStyles>
    </TouchableOpacityWrapper>
  );
};
