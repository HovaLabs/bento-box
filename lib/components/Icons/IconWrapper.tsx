import styled from "styled-components";

export interface IconWrapperProps {
  size: number;
}

export const IconWrapper = styled("div")<IconWrapperProps>`
  width: ${p => p.size}px;
  height: ${p => p.size}px;
`;
