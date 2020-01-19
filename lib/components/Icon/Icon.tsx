import React from "react";
import {
  NativeSyntheticEvent,
  NativeTouchEvent,
  TouchableOpacity,
} from "react-native";
import { StyledIcon, StyledIconProps } from "styled-icons/types";

interface IconWrapperProps {
  onPress?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
  children: React.ReactNode;
}
const IconWrapper = ({
  onPress,
  children,
}: IconWrapperProps): React.ReactElement => {
  if (!onPress) {
    return <>{children}</>;
  }

  return <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;
};

interface IconProps extends StyledIconProps {
  IconComponent: StyledIcon;
  onPress?: (e: NativeSyntheticEvent<NativeTouchEvent>) => void;
}
export const Icon = ({
  IconComponent,
  onPress,
  ...rest
}: IconProps): React.ReactElement => {
  return (
    <IconWrapper onPress={onPress}>
      <IconComponent {...rest} />
    </IconWrapper>
  );
};
