import React from "react";
import { FaHouse } from "react-icons/fa6";
import { FaFile, FaClipboardList, FaMoon } from "react-icons/fa";

export default function Header() {
  return (
    <div className="nav">
      <div className="left">
        <FaFile />
        DayFlow Planner
      </div>
      <div className="rigth">
        <ul>
          <li>
            <a href="#">
              Home <FaHouse />
            </a>
          </li>
          <li>
            <a href="#">
              Schedule <FaClipboardList />
            </a>
          </li>
          <li>
            <a href="#">
              Azkar <FaMoon />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
