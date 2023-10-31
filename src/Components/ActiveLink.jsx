import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-semibold text-base"
            : "font-semibold text-base"
        }
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
