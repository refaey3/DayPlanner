import React from "react";
import styled from "styled-components";
import Head from "./Head";
import Body from "./Body";
const Containerr = styled("div")`
    background-color: #fff;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0 10px 5px rgba(0, 0, 0, 0.1);
    position: relative;
    height: fit-content;
}`;
export default function TaskContainer({tasks,addNewTask,deleteTask,setTasks}) {
  
  return (
    <Containerr>
      <Head addNewTask={addNewTask} />
      <Body tasks={tasks} deleteTask={deleteTask} setTasks={setTasks}/>
    </Containerr>
  );
}
