import React from "react";
import styled from "styled-components";
import Progress from "./Progress";
const Rigth = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 20px;
}
`;
export default function InfoProg() {
  return (
    <Rigth>
      <Progress />
    </Rigth>
  );
}
