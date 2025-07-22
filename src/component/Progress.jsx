import React from "react";
import styled from "styled-components";
const Prog = styled("div")`
  background-color: #fff;
  border-radius: 10px;
  /* padding: 15px; */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
const Header = styled("h4")`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  background-color: hsl(194.21deg 86.36% 56.86%);
  padding: 10px;
`;
const Pending = styled("p")`
  font-size: 16px;
  color: #777;
  padding: 20px;
`;
const Total = styled("p")`
  font-size: 16px;
  color: #777;
  padding: 20px;
`;
export default function Progress({ total, completed, pending }) {
  return (
    <Prog>
      <Header>Today's Progress</Header>
      <Pending>
        Completed: {completed} | Pending: {pending}
      </Pending>
      <Total>Total : {total}</Total>
    </Prog>
  );
}
