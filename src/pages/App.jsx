import React from "react";
import Header from "../component/Header";
import Home from "./Home";
import Time from "../component/Time";
import Azkar from "./Azkar";
import Sechedule from "./Sechedule";
import LoginReg from "../component/LoginReg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import app from "../Lib/FireBase";
import { getAuth } from "firebase/auth";
const Light = styled("div")`
  background-color: #f9f9f9;
  color: #222;
`;
const Dark = styled("div")`
  background-color: #121212;
  color: #fff;
`;
const Buttom = styled("button")`
  margin: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
`;
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [log, setLog] = useState(true);
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  useEffect(() => {
    const check = localStorage.getItem("isLogged");
    if (check === "true") {
      setLog(false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, completed: false }]);
    addDoc(collection(getFirestore(app), "tasks"), {
      ...newTask,
      completed: false,
      userId: getAuth(app).currentUser.uid,
    });
  };
  const delTask = (del) => {
    const res = tasks.filter((item) => del !== item);
    setTasks(res);
  };
  return (
    <BrowserRouter basename="/DayPlanner">
      <Header />
      <Time />
      <Routes>
        {log ? (
          <Route path="/" element={<LoginReg setLog={setLog} />} />
        ) : (
          <Route
            path="/"
            element={
              <Home
                tasks={tasks}
                addTask={addTask}
                delTask={delTask}
                setTasks={setTasks}
              />
            }
          />
        )}
        <Route path="/azkar" element={<Azkar />} />
        <Route path="/sechedule" element={<Sechedule tasks={tasks} />} />
      </Routes>
    </BrowserRouter>
  );
}
