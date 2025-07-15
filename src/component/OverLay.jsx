import React from "react";
import styled from "styled-components";
const Over = styled("div")`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 50%);
  z-index: 1000;
`;
export default function OverLay() {
  return <Over />;
}
