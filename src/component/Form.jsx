import React from "react";
import styled from "styled-components";
import { useState } from "react";
const FormContaier = styled("div")`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 1001;
  border: 3px solid #ddd;
  background-color: #fff;
  padding: 20px;
  width: 500px;
  height: 500px;
  max-width: 100%;
  border-radius: 15px;
`;
const Header = styled("div")`
  border-bottom: 1px solid #333;
  display: flex;
  justify-content: space-between;
`;
const X = styled("div")`
  cursor: pointer;
  width: 30px;
  height: 30px;
  border: 2px solid black;
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Body = styled("div")`
  margin-top: 30px;
`;
const Input = styled("input")`
  width: 96%;
  height: 51px;
  margin-top: 13px;
  outline: none;
  border: 1px solid #ddd;
  font-size: 25px;
  border-radius: 10px;
  font-weight: bold;
`;
const CategoryLabel = styled("label")`
  position: relative;
  top: 14px;
  left: 23px;
  /* font-size: 25px; */
  display: inline-block;
  font-size: 20px;
  color: #0a0909;
  font-weight: bold;
`;
const Select = styled("select")`
  position: relative;
  top: 62px;
  width: 189px;
  height: 50px;
  border-radius: 52px;
  padding: 12px;
  font-size: 20px;
  color: #777;
  font-weight: bold;
  background-color: #f0f0f0;
  left: -85px;
  cursor: pointer;
`;
const TimeParent = styled("div")`
  position: relative;
  top: 105px;
  display: flex;
  justify-content: space-around;
  left: -12px;
`;
const StartTime = styled("input")`
  &:before {
    position: absolute;
    content: "Start Time";
    /* background: #777; */
    /* width: 10px; */
    left: 28px;
    height: 11px;
    color: #777;
    top: -22px;
    font-size: 20px;
  }
`;
const EndTime = styled("input")`
  &:before {
    position: absolute;
    content: "End Time";
    /* background: #777; */
    /* width: 10px; */
    left: 196px;
    height: 11px;
    color: #777;
    top: -22px;
    font-size: 20px;
  }
`;
const Footer = styled("div")`
  position: relative;
  top: 198px;
  left: 128px;
  display: flex;
  gap: 22px;
  width: 200px;
`;
const Cancel = styled("button")`
  border: none;
  border-radius: 10px;
  width: 85px;
  height: 30px;
  cursor: pointer;
  color: white;
  background-color: red;
`;
const AddTask = styled("button")`
  border: none;
  border-radius: 10px;
  width: 85px;
  height: 30px;
  cursor: pointer;
  color: white;
  background-color: purple;
`;
export default function Form({ setFormState, addNewTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("work");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const handelSumbit = () => {
    const task = {
      title,
      category,
      startTime,
      endTime,
    };
    addNewTask(task);
    setFormState(false);
  };
  return (
    <>
      <FormContaier>
        <Header>
          <h3>Add_A_new_Task</h3>
          <X onClick={() => setFormState(false)}>X</X>
        </Header>
        <Body>
          <p
            style={{
              fontSize: "25px",
              color: "#777",
              fontWeight: "bold",
            }}
          >
            Task Title
          </p>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </Body>
        <CategoryLabel>Category</CategoryLabel>
        <Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="work">Work</option>
          <option value="health">Health</option>
          <option value="personal">Personal</option>
          <option value="study">Study</option>
          <option value="other">Other</option>
        </Select>
        <TimeParent>
          <StartTime
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
          />
          <EndTime
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
          />
        </TimeParent>
        <Footer>
          <Cancel onClick={() => setFormState(false)}>Cancel</Cancel>
          <AddTask onClick={handelSumbit}>AddTask</AddTask>
        </Footer>
      </FormContaier>
    </>
  );
}
