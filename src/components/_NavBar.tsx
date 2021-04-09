import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export function Navbar(): JSX.Element {
  return (
    <nav className="fixed min-h-screen bg-gray-600 w-48 pt-3 flex flex-col items-center">
      <div className="text-white my-4 h-1/4 flex items-center justify-center">
        <h3 className="text-4xl">Eli.</h3>
      </div>
      <div className="h-2/4">
        <ul className="flex flex-col h-full justify-around text-xl font-medium text-center">
          <li className="text-white">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="text-white text-opacity-50">
            <NavLink to="/quiz">Quiz</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
