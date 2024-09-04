import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Me
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              My Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
