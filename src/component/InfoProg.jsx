import React from "react";
import styled from "styled-components";
import Progress from "./Progress";
import TaskChart from "./TaskChar";
const Rigth = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 20px;
}
`;
export default function InfoProg({total,completed,pending,tasks}) {
  
  return (
    <Rigth>
      <Progress total={total} completed={completed} pending={pending}/>
      <TaskChart tasks={tasks}/>
    </Rigth>
  );
}
