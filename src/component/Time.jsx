import React from "react";
import styled from "styled-components";
const Clock = styled("div")`
  margin: 20px auto;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #777;
  letter-spacing: 4px;
`;
export default function Time() {
  let date = new Date();
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const dataSting = `${day}/${month}/${year}`;
  return <Clock>
    {dataSting}
  </Clock>;
}
