import React from "react";
import { FaHouse } from "react-icons/fa6";
import { FaFile, FaClipboardList, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <Link to="/">
              Home <FaHouse />
            </Link>
          </li>
          <li>
            <Link to="/sechedule">
              Schedule <FaClipboardList />
            </Link>
          </li>
          <li>
            <Link to="/azkar">
              Azkar <FaMoon />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
