import React from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa6";
const TaskBody = styled("div")`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #77777773;
  margin: 35px;
  border-radius: 3px;
  border-left: 7px solid orange;
  align-items: center;
  position: relative;
  font-weight: bold;
`;
const Task = styled("div")`
  display: flex;
  gap: 10px;
`;
const Input = styled("input")`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;
const Info = styled("div")`
  font-size: 16px;
  color: #333;
  display: flex;
`;
const Category = styled("span")`
  background-color: hsl(120, 60%, 90%);
  padding: 3px 5px;
  border-radius: 3px;
  font-size: 11px;
  position: absolute;
  bottom: 0;
  right: 50px;
  width: 52px;
  text-align: center;

`;
const StudyCategory=styled(Category)`
background-color: hsla(120, 92%, 46%, 1.00);
`
const TaskTime = styled("span")`
  position: absolute;
  right: 106px;
  top: 50px;
  color: #777;
`;
const Icons = styled("div")`
  cursor: pointer;
  display: flex;
  gap: 20px;
  font-weight: bold;
  font-size: 15px;
`;
const Trash = styled("i")`
  color: red;
  border: 1px red solid;
  padding: 10px;
  border-radius: 5px;
`;
export default function Body({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskBody>
          <Task>
            <Input type="checkbox" />
            <Info>{task.title}</Info>
            {task.category==="study"&&(<StudyCategory>{task.category}</StudyCategory>)}
            
            <TaskTime>{task.startTime}-{task.endTime}</TaskTime>
          </Task>
          <Icons>
            <Trash>
              <FaTrash />
            </Trash>
          </Icons>
        </TaskBody>
      ))}
    </>
  );
}
