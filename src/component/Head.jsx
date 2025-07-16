import React, { useState } from "react";
import Form from "./Form";
import styled from "styled-components";
import OverLay from "./OverLay";
const Add = styled("div")`
    background-color: var(--main-color);
    padding: 15px;
    display: flex;
    justify-content: space-between;
}
`;
const H4 = styled("h4")`
font-size: 20px;
    color: #333;
}
`;
const Buttom = styled("button")`
  background-color: hsl(194.21deg 86.36% 56.86%);
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 17px;
`;
export default function Head({addNewTask}) {
  const [showForm, setShowForm] = useState(false);

  
  return (
    <>
      <Add>
        <H4>Todays'Tasks</H4>
        <Buttom onClick={() => setShowForm(true)}>+ Add Task</Buttom>
      </Add>
      {showForm && (
        <>
          <Form 
          setFormState={setShowForm}
          addNewTask={addNewTask}
          />
          <OverLay />
        </>
      )}
    </>
  );
}
/*
Home ->Head 
Head -> form
form get it
*/
