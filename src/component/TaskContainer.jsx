import React from "react";
import styled from "styled-components";
import Head from "./Head";
import { useState } from "react";
import Body from "./Body";
const Containerr = styled("div")`
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    height: fit-content;
}`;
export default function TaskContainer() {
  const [tasks, setTasks] = useState([]);
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const delTask = (del) => {
    const res=tasks.filter((item)=>del!==item);
    setTasks(res) 
  };
  return (
    <Containerr>
      <Head addNewTask={addTask} />
      <Body tasks={tasks} deleteTask={delTask}/>
    </Containerr>
  );
}
