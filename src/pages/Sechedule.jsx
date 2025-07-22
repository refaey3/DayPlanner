import React from "react";
import styled from "styled-components";
const Container = styled("div")`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
  width: 80%;
  height: auto;
  margin: 20px auto;
  overflow: hidden;
  padding-bottom: 12px;
  (max-width: 767px) {
    width: 97%;
  }
`;
const Header = styled("h3")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 20px;
  color: #000;
  font-size: 25px;
  margin-inline: 40px;
  text-align: center;
  postion: ab;
`;
const Body = styled("div")`
  margin-inline: 30px;
`;
const Tasks = styled("div")`
  margin-top: 42px;
  display: flex;
`;
const Timer = styled("p")`
  margin-right: 17px;
  position: relative;
`;
const TaskCont = styled("div")`
  position: relative;
  top: -19px;
`;
const Task = styled("div")`
  background-color: rgb(166, 226, 245);
  margin-top: 2px;
  width: fit-content;
  height: auto;
  padding: 5px 26px;
  border-radius: 2px;
  transition: all 0.3s ease;
`;
export default function Sechedule({ tasks }) {
  const hours = [];
  for (let i = 0; i < 24; i++) {
    const tasksForHour = tasks.filter((task) => task.hour === i);

    hours.push(
      <Tasks key={i}>
        <Timer>{i.toString().padStart(2, "0")}:00</Timer>
        {tasksForHour.length > 0 && (
          <TaskCont>
            <Task>
              {tasksForHour.map((task, index) => (
                <p key={index}>{task.title}</p>
              ))}
            </Task>
          </TaskCont>
        )}
      </Tasks>
    );
  }
  return (
    <Container>
      <Header>Today's Schedule</Header>
      <Body>{hours}</Body>
    </Container>
  );
}
