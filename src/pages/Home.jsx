import Head from "../component/Head";
import InfoProg from "../component/InfoProg";
import TaskContainer from "../component/TaskContainer";
import styled from "styled-components";
import { useState } from "react";
const Container = styled("div")`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  padding: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default function Home({tasks,addTask,delTask,setTasks}) {
  
  const total = tasks.length;
  const completed = tasks.filter((item) => item.completed).length;
  const pending = total - completed;

  return (
    <Container>
      <TaskContainer
        tasks={tasks}
        addNewTask={addTask}
        deleteTask={delTask}
        setTasks={setTasks}
      />
      <InfoProg total={total} completed={completed} pending={pending} tasks={tasks}/>
    </Container>
  );
}
