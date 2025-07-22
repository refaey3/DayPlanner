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
const InfoCheck = styled(Info)`
  text-decoration: ${(prop) => (prop.checked ? "line-through" : "none")};
  color: ${(prop) => (prop.checked ? "gray" : "black")};
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
const StudyCategory = styled(Category)`
  background-color: yellow;
`;
const WorkCategory = styled(Category)`
  background-color: blue;
`;
const HealthCategory = styled(Category)`
  background-color: red;
`;
const PersonalCategory = styled(Category)`
  background-color: green;
`;
const OtherCategory = styled(Category)`
  background-color: gray;
`;
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
const NoTasksMessage = styled("h1")`
  text-align: center;
  color: #777;
  margin: 35px;
`;
export default function Body({ tasks, deleteTask, setTasks }) {
  return (
    <>
      {!tasks.length ? (
        <NoTasksMessage>Not Tasks Yet</NoTasksMessage>
      ) : (
        tasks.map((task) => {
          return (
            <TaskBody key={task.id}>
              <Task>
                <Input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => {
                    const Update = tasks.map((item) =>
                      item === task
                        ? { ...item, completed: !item.completed }
                        : item
                    );
                    setTasks(Update);
                  }}
                />
                <InfoCheck checked={task.completed}>{task.title}</InfoCheck>
                {task.category === "study" && (
                  <StudyCategory>{task.category}</StudyCategory>
                )}
                {task.category === "health" && (
                  <HealthCategory>{task.category}</HealthCategory>
                )}
                {task.category === "personal" && (
                  <PersonalCategory>{task.category}</PersonalCategory>
                )}
                {task.category === "work" && (
                  <WorkCategory>{task.category}</WorkCategory>
                )}
                {task.category === "other" && (
                  <OtherCategory>{task.category}</OtherCategory>
                )}

                <TaskTime>
                  {task.startTime}-{task.endTime}
                </TaskTime>
              </Task>
              <Icons>
                <Trash onClick={() => deleteTask(task)}>
                  <FaTrash />
                </Trash>
              </Icons>
            </TaskBody>
          );
        })
      )}
    </>
  );
}
