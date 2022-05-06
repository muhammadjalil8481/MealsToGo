import styled from "styled-components/native";

const sizeVariant = {
  small: "4px",
  medium: "8px",
  large: "12px",
  xlarge: "16px",
  xxlarge: "20px",
};
const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

const getVariant = (position, size) => {
  const sizeNumber = sizeVariant[size];
  const property = positionVariant[position];
  const value = sizeNumber;

  return `${property}:${value}`;
};
const SpacerView = styled.View`
  ${({ variant }) => variant};
`;
export const Spacer = ({ position, size, children }) => {
  const variant = getVariant(position, size);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
